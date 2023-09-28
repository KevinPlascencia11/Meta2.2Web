//Ruta establecida.
const donatarios = require("../modelos/donatarios");

//Metodos complementarios.
const getAll = async function(req, res)
{
    let p = donatarios.findAll();
    await res.json(p);
}

const findByRFC = async function(req, res)
{
    await res.json(donatarios.findByRFC(req.params.sku));
}

const add = async function(req, res)
{
    try
    {
        const nuevoDonatario = await donatarios.add(req.body);
        res.status(201).json(nuevoDonatario);
    }
    catch (error)
    {
        res.status(500).json({ error: "Error al agregar el donatario" });
    }
}

//Exportaciones.
exports.getAll = getAll;
exports.findByRFC = findByRFC;
exports.add = add;
