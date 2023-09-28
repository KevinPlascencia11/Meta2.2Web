//Preparativos para donadores.
const express = require("express");
const router = express.Router();
const donadoresController = require("../controladores/donadoresController");

router.get("/", donadoresController.getAll);
router.get("/:sku", donadoresController.findByRFC);
router.post("/", donadoresController.add);

module.exports = router;
