const Blockchain = require("./blockchain.js");

const genesis = new Blockchain();

genesis.createNewBlock(5424, "PreviousHash", "Hash");

genesis.createNewTransaction(100, "Zay", "Shine");

genesis.createNewBlock(3742, "PreviousHash", "Hash");

genesis.createNewTransaction(50, "Zay", "Shine");

genesis.createNewTransaction(100, "Zay", "Shine");

genesis.createNewTransaction(300, "Zay", "Shine");

genesis.createNewBlock(9751, "PreviousHash", "Hash");

console.log(genesis);
