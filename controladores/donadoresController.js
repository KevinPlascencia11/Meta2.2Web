//Ruta establecida.
const donadores = require("../modelos/donadores");

//Metodos complementarios.
const getAll = async function (req, res)
{
    let p = donadores.findAll();
    await res.json(p);
}

const findByRFC = async function (req, res)
{
    await res.json(donadores.findByRFC(req.params.sku));
}

const add = async function (req, res)
{
    try
    {
        const nuevoDonador = await donadores.add(req.body);
        res.status(201).json(nuevoDonador);
    }
    catch (error)
    {
        res.status(500).json({ error: "Error al agregar el donador" });
    }
}

//Exportaciones.
exports.getAll = getAll;
exports.findByRFC = findByRFC;
exports.add = add;
