const bitcoin = require("bitcoinjs-lib");
const apiDB = require("../../utils/apidb");

const TestNet = bitcoin.networks.testnet;

exports.createWallet = async (req, res) => {
  let keyPair = bitcoin.ECPair.makeRandom({ network: TestNet });
  let publicKey = keyPair.publicKey;
  let privateKey = keyPair.toWIF();
  let { address } = bitcoin.payments.p2pkh({
    pubkey: publicKey,
    network: TestNet,
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
