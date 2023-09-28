//Preparativos para proyectos.
const express = require("express");
const router = express.Router();
const proyectosController = require("../controladores/proyectosController");

router.get("/", proyectosController.getAll);
router.get("/:sku", proyectosController.findByID);
router.post("/", proyectosController.add);

module.exports = router;