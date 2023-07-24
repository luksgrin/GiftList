const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');
const fs = require('fs');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list?
  const name = process.argv[2];
  const proofPath = process.argv[3];
  
  // Fetch proof
  const proof = JSON.parse(
    fs.readFileSync(
      proofPath,
      'utf8'
    )
  );

  const data = [name, proof]

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    data
  });

  console.log({ gift });
}

main();