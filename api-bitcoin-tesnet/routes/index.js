const router = require("express").Router();
const controllers = require('../controllers/index');

router.post('/wallet', controllers.createWallet);
router.get('/wallet',controllers.infoWallet);

module.exports = router;
