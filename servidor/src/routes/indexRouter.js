var express = require('express');
var router = express.Router();
const indexController = require("../controller/indexController")

router.get("/", indexController.index)
router.get("/create", indexController.create)
router.post("/", indexController.store)
router.get("/:id/edit", indexController.edit)
router.put("/:id", indexController.update)
router.delete("/:id", indexController.destroy)

module.exports = router;