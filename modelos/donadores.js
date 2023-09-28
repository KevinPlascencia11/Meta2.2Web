//Llenado de donadores.
const donadores =
[
    {
        rfc: 1,
        nombre: "Usuario 1",
        proyectosAsociados: ["Proyecto 1"],
        imagen: "https://random.imagecdn.app/100/100",
        cantidadDonada: 300000.00,
    },
];

//Metodos complementarios.
const findAll = function ()
{
    return donadores;
}

const findByRFC = function (rfc)
{
    let p = donadores.find((e) => e.rfc == rfc);
    return p;
}

const add = async function (nuevoDonador)
{
    const RFCAux = Math.max(...donadores.map((donador)=>donador.rfc))+1;
    const donador = {
        rfc: RFCAux,
        ...nuevoDonador,
    };
    donadores.push(donador);
    return donador;
};

//Exportaciones.
exports.findAll = findAll;
exports.findByRFC = findByRFC;
exports.add = add;
