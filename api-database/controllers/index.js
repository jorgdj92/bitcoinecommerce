const index = require('../middlewares/index') 
const wallet = require('../middlewares/wallet');
const user = require('../middlewares/user')
//Wallets

exports.createWallet=[
    index.validateData,
    wallet.createWallet
]

exports.getWallet=[
    index.validateData,
    wallet.getWallet
]

// Users
exports.createUser=[
    index.validateData,
    user.createUser
];
exports.getUser = [
    index.validateData,
    user.getUser
]
