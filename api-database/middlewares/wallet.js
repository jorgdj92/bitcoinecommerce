const fireBase = require("../utils/firebase");

let  firebase = new fireBase("wallets");

async function createWallet(req, res) {
    try {
        console.log(req);
        let data = {
            address: req.objects.data.address,
            privateKey:req.objects.data.privatekey,
            publicKey:req.objects.data.publickey
        }
        let walletResult = await firebase.create(req.objects.data.id,data);
        res.json({ result: true,mesage: walletResult})

    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    createWallet,
};
