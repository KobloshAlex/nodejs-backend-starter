const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.route("/").get(controller.get);

module.exports = router;
