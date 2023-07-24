const niceList = require('./niceList');
const MerkleTree = require('./MerkleTree');

// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);

const name = process.argv[2];

const proof = merkleTree.getProof(
    niceList.findIndex(n => n === name)
);

console.log(
    JSON.stringify(proof)
);