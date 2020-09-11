const router = require("express").Router();
const controllers = require('../controllers/index');

router.post('/wallet', controllers.createWallet);

module.exports = router;
