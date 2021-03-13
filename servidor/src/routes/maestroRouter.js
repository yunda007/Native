var express = require('express');
var router = express.Router();
const maestroController = require("../controller/maestroController")

router.get("/", maestroController.index)
router.get("/create", maestroController.create)
router.post("/", maestroController.store)
router.get("/:id/edit", maestroController.edit)
router.put("/:id", maestroController.update)
router.delete("/:id", maestroController.destroy)

module.exports = router;