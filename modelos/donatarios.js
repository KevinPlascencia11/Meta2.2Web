//Llenado de donatarios.
const donatarios = [
    {
        rfc: 1,
        nombre: "Usuario 1",
        proyectoAsociado: "Proyecto 1",
        imagen: "https://random.imagecdn.app/100/100",
    },
    {
        rfc: 2,
        nombre: "Usuario 2",
        proyectoAsociado: "Proyecto 2",
        imagen: "https://random.imagecdn.app/100/100",
    },
];

//Metodos complementarios.
const findAll = function()
{
    return donatarios;
}

const findByRFC = function(rfc)
{
    let p = donatarios.find(e => e.rfc == rfc);
    return p;
}

const add = async function(nuevoDonatario)
{
    const RFCAux = Math.max(...donatarios.map(donatario=>donatario.rfc),0)+1;
    const nuevoDonatarioRFC = {
        rfc: RFCAux,
        ...nuevoDonatario,
    };
    donatarios.push(nuevoDonatarioRFC);
    return nuevoDonatarioRFC;
};

//Exportaciones.
exports.findAll = findAll;
exports.findByRFC = findByRFC;
exports.add = add;
