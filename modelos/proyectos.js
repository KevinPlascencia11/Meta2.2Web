//Llenado de proyectos.
const proyectos = [
    {
        id: 1,
        nombre: "Proyecto 1",
        descripcion: "Decripcion 1",
        imagen: "https://random.imagecdn.app/100/100",
        donatario: "Usuario 1",
        donadores: ["Usuario 2", "Usuario 3"],
        cantidadDonada: 100000.00,
    },
    {
        id: 2,
        nombre: "Proyecto 2",
        descripcion: "Descripcion 2",
        imagen: "https://random.imagecdn.app/100/100",
        donatario: "Usuario 2",
        donadores: ["Usuario 3", "Usuario 1"],
        cantidadDonada: 200000.00,
    },
];

//Metodos complementarios.
const findAll = function()
{
    return proyectos;
}

const findByID = function(id)
{
    let p = proyectos.find(e => e.id == id);
    return p;
}

const add = async function(nuevoProyecto)
{
    const idAux = Math.max(...proyectos.map(proyecto=>proyecto.id),0)+1;
    const nuevoProyectoID = {
        id: idAux,
        ...nuevoProyecto,
    };
    proyectos.push(nuevoProyectoID);
    return nuevoProyectoID;
};

//Exportaciones.
exports.findAll = findAll;
exports.findByID = findByID;
exports.add = add;