const index = require("../middlewares/index");
const wallet = require("./wallet/wallet");

exports.createWallet = [index.validateData, wallet.createWallet];
