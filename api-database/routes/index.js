const express = require("express");
const { route } = require("express/lib/router");
const router = express.Router();
var controllers = require("../controllers/index");

router.post('/wallet', controllers.createWallet);
router.get('/wallet', controllers.getWallet);

router.post('/users', controllers.createUser);
router.get('/user', controllers.getUser)

module.exports = router;
