8//Ruta establecida.
const proyectos = require("../modelos/proyectos");

//Metodos complementarios.
const getAll = async function(req, res)
{
    let p = proyectos.findAll();
    await res.json(p);
}

const findByID = async function(req, res)
{
    await res.json(proyectos.findByID(req.params.sku));
}

const add = async function(req, res)
{
    try
    {
        const nuevoProyecto = await proyectos.add(req.body);
        res.status(201).json(nuevoProyecto);
    }
    catch (error)
    {
        res.status(500).json({ error: "Error al agregar el proyecto"});
    }
}

//Exportaciones.
exports.getAll = getAll;
exports.findByID = findByID;
exports.add = add;