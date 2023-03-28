const express = require("express");

const mpesaController = require("../controller/mpesa")

const router = express.Router();

router.post("/doar",mpesaController.getMpesa);

module.exports = router