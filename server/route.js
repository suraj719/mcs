const express = require("express")
const router = express.Router();
const {getUser} = require("./controller")
router.route('/user/:username').get(getUser)
module.exports = router