const express = require("express");
const { getAllRestaurents } = require("../controler.js/restaurentcontrol");
const router = express.Router();

router.route("/restaurents").get(getAllRestaurents)



module.exports = router;
