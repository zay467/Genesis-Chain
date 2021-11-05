const express = require("express");
const bodyParser = require("body-parser");
const Blockchain = require("./blockchain.js");
const uuid = require("uuid/v1");

const nodeAddress = uuid().split("-").join("");

const genesis = new Blockchain();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/blockchain", function (req, res) {
  res.send(genesis);
});

app.post("/transaction", function (req, res) {
  const blockIndex = genesis.createNewTransaction(
    req.body.amount,
    req.body.sender,
    req.body.recipient
  );
  res.json({ note: `Transaction will be added in block ${blockIndex}.` });
});

app.get("/mine", function (req, res) {
  const lastBlock = genesis.getLastBlock();
  const previousBlockHash = lastBlock["hash"];
  const currentBlockData = {
    transactions: genesis.pendingTransactions,
    index: lastBlock["index"] + 1,
  };
  const nonce = genesis.proofOfWork(previousBlockHash, currentBlockData);
  const hash = genesis.hashBlock(previousBlockHash, currentBlockData, nonce);
  genesis.createNewTransaction(10, "00", nodeAddress);
  const newBlock = genesis.createNewBlock(nonce, previousBlockHash, hash);
  res.json({ note: "New block mined successfully.", block: newBlock });
});

app.listen(3000, function () {
  console.log("Listening on port 3000...");
});
