var express = require('express');
var router = express.Router();
const estudianteController = require("../controller/estudianteController")

router.get("/", estudianteController.index)
router.get("/create", estudianteController.create)
router.post("/", estudianteController.store)
router.get("/:id/edit", estudianteController.edit)
router.put("/:id", estudianteController.update)
router.delete("/:id", estudianteController.destroy)

module.exports = router;