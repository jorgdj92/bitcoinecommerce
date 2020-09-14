const bitcoin = require("bitcoinjs-lib");
const apiBlockCypher= require('../../utils/apiBlockCypher')
const apiDB = require("../../utils/apidb");

const tesnet = bitcoin.networks.testnet;

async function createWallet(req, res) {
  let keyPair = bitcoin.ECPair.makeRandom({ network: tesnet });
  let publicKey = keyPair.publicKey;
  let privateKey = keyPair.toWIF();
  let { address } = bitcoin.payments.p2pkh({
    pubkey: publicKey,
    network: tesnet,
  });

  let user = await apiDB.getData("/api/user", {
    email: req.objects.data.email,
  });

  let data = {
    id: user.uid,
    address: address,
    privatekey: privateKey,
    publickey: publicKey,
  };

  try {
    let result = await apiDB.create("/api/wallet", data);
    res.json({ address: address });
  } catch (error) {
    res.status(400).json(error);
  }
};

async function getInfoWallet(req,res){
  try {
    let result = await apiBlockCypher.getInfoWallet(req.objects.data.address);
    res.json(result)
  } catch (error) {
    res.status(400).json(error)
  }
  
}

async function createTransaction(){
let transaction =  new bitcoin.TransactionBuilder(tesnet);
let transactionId = ""
let outn =0;

transaction.addInput(transactionId,outn);
transaction.addOutput("Address",323)

let WIF = ""
let keyPairSpend = bitcoin.ECPair.fromWIF(WIF,tesnet)
//firmas tran

transaction.sign(0,keyPairSpend);

let tx = transaction.build();
let txhex = transaction.toHex();
console.log(txhex)

}

module.exports= {
  createWallet,
  getInfoWallet,
  createTransaction
}
