const express = require("express");
const {helloWorld} = require("./controller");

const router = express.Router();
router.get("/", helloWorld);

module.exports = router;