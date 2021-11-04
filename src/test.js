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

// console.log(genesis.proofOfWork(previousBlockHash, currentBlockData));
// console.log(genesis.hashBlock(previousBlockHash, currentBlockData, 121199));
console.log(genesis);
