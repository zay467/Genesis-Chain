const Blockchain = require("./blockchain.js");

const genesis = new Blockchain();

genesis.createNewBlock(5424, "PreviousHash", "Hash");

console.log(genesis);
