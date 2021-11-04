const Blockchain = require("./blockchain.js");

const genesis = new Blockchain();

const previousBlockHash = "AEOEHQ9GHE9GQ";
const currentBlockData = [
  {
    amount: 10,
    sender: "Zay",
    recipient: "Shine",
  },
  {
    amount: 30,
    sender: "Zay",
    recipient: "Shine",
  },
  {
    amount: 80,
    sender: "Zay",
    recipient: "Shine",
  },
];
const nonce = 100;

console.log(genesis.hashBlock(previousBlockHash, currentBlockData, nonce));

console.log(genesis);
