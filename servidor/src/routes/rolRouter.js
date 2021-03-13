var express = require('express');
var router = express.Router();
const rolController = require("../controller/rolController")

router.get("/", rolController.index)


module.exports = router;