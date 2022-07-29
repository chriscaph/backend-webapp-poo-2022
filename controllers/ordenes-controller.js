//agregar orden.
module.exports.postOrden = (req, res) => {
    res.send('Agregando orden.')
}

//leer ordenes.
module.exports.getOrdenes = (req, res) => {
    res.send('Leyendo ordenes.');
}

//leer orden.
module.exports.getOrden = (req, res) => {
    res.send('Leyendo orden ' + req.params.id);
}

//actualizar orden.
module.exports.putOrden = (req, res) => {
    res.send('Actualizando orden ' + req.params.id);
}

//eliminar orden.
module.exports.deleteOrden = (req, res) => {
    res.send('Eliminando orden ' + req.params.id);
}