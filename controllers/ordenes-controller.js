const orden = require('../models/orden');

//agregar orden.
module.exports.postOrden = (req, res) => {
    res.send('Agregando orden.');
    res.end();
}

//leer ordenes.
module.exports.getOrdenes = (req, res) => {
    res.send('Leyendo ordenes.');
    res.end();
}

//leer orden.
module.exports.getOrden = (req, res) => {
    res.send('Leyendo orden ' + req.params.id);
    res.end();
}

//actualizar orden.
module.exports.putOrden = (req, res) => {
    res.send('Actualizando orden ' + req.params.id);
    res.end();
}

//eliminar orden.
module.exports.deleteOrden = (req, res) => {
    res.send('Eliminando orden ' + req.params.id);
    res.end();
}