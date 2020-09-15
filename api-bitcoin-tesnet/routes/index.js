const router = require("express").Router();
const controllers = require('../controllers/index');

router.post('/wallet', controllers.createWallet);
router.get('/wallet',controllers.infoWallet);
router.post('/wallet/found',controllers.fundWallet);

router.post('/transfer',controllers.transfer)
router.post('/buy',controllers.buyProduct)

module.exports = router;
