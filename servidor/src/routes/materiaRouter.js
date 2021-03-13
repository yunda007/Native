var express = require('express');
var router = express.Router();
const materiaController = require("../controller/materiaController")

router.get("/", materiaController.index)
router.get("/create", materiaController.create)
router.post("/", materiaController.store)
router.get("/:id/edit", materiaController.edit)
router.put("/:id", materiaController.update)
router.delete("/:id", materiaController.destroy)

module.exports = router;