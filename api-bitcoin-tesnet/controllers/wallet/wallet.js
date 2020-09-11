const bitcoin = require("bitcoinjs-lib");
const TestNet = bitcoin.networks.testnet;

exports.createWallet = (req, res) => {
//generate the key pair using the makeRandom functions (there a bunch of ways to make an address btw)
let keyPair = bitcoin.ECPair.makeRandom({ network: TestNet });
//extract the publickey
let publicKey = keyPair.publicKey;
//get the private key
let privateKey = keyPair.toWIF();
//get an address from the keyPair we generated above.
let { address } = bitcoin.payments.p2pkh({
  pubkey: publicKey,
  network: TestNet
});


console.log("Pay me f00l " + address);
res.json({ address : address })
}

