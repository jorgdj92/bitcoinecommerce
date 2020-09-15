const fireBase = require("../utils/firebase");

let  firebase = new fireBase("wallets");

async function createWallet(req, res) {
    try {
        console.log(req);
        let data = {
            address: req.objects.data.address,
            privateKey:req.objects.data.privatekey,
            publicKey:req.objects.data.publickey,
            wif: req.objects.data.wif
        }
        let walletResult = await firebase.create(req.objects.data.id,data);
        res.json({ result: true,mesage: walletResult})

    } catch (error) {
        res.json(error)
    }
}

async function getWallet (req,res){
    try {
        let user = await firebase.getUser(req.objects.data.email);
        let wallet =  await firebase.getData(user.uid);
        return res.json(wallet)

    } catch (error) {
        return error
    }

}

module.exports = {
    createWallet,
    getWallet
    
};
