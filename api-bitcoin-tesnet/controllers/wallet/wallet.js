const apiBlockCypher= require('../../utils/apiBlockCypher')
const apiDB = require("../../utils/apidb");

async function createWallet(req,res){
  try {
    let newAddress =  await apiBlockCypher.createAddress();
    let user = await apiDB.getData("/api/user", {
      email: req.objects.data.email,
    });

    let data = {
      id: user.uid,
      address: newAddress.data.address,
      privatekey: newAddress.data.private,
      publickey: newAddress.data.public,
      wif: newAddress.data.wif

    };
    let result = await apiDB.create("/api/wallet", data);
    res.json({ address: newAddress.data.address });

    console.log(newAddress)
    res.json(newAddress.data)
  } catch (error) {
    return res.status(400).json(error)
  }
}

async function foundWalletEmail(req,res){
  try {
    let wallet = await apiDB.getData("/api/wallet", {
      email: req.objects.data.email,
    });

    let tx  =  await apiBlockCypher.foundWallet(wallet.address,req.objects.data.amount)
    res.json(tx)
  } catch (error) {
    return res.status(400).json(error)
  }

}

async function getInfoWallet(req,res){
  try {
    let result = await apiBlockCypher.getInfoWallet(req.objects.data.address);
    res.json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}


module.exports= {
  createWallet,
  getInfoWallet,
  foundWalletEmail
}
