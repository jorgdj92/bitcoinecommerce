const fireBase = require("../utils/firebase");

let firebase = new fireBase("users");

async function createUser(req, res) {
    try {
        let uid = await firebase.createUser(req.objects.data);
    if (uid.message === undefined || uid.message === null) {
        res.json({ uid: uid });
    } else {
        res.status(400).json({ error: uid.message });
    }
} catch (error) {
    res.status(400).json(error.message);
}
}

async function getUser(req, res) {
    try {
        let user = await firebase.getUser(req.objects.data.email);
        res.json(user);
    }catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    createUser,
    getUser,
};
