//Establecimiento del servidor y sus rutas.
const cors = require("cors");
const express = require("express");
const donadoresRouter = require("./rutas/donadores");
const donatariosRouter = require("./rutas/donatarios");
const proyectosRouter = require("./rutas/proyectos");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use("/proyectos", proyectosRouter);
app.use("/donatarios", donatariosRouter);
app.use("/donadores", donadoresRouter);

//Puerto del servidor.
app.listen(port, () =>
{
    console.log("Puerto: ", port);
});