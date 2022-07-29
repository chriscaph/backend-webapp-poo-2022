//agregar producto.
module.exports.postProducto = (req, res) => {
    res.send('Agregando producto.')
}

//leer productos.
module.exports.getProductos = (req, res) => {
    res.send('Leyendo productos.');
}

//leer producto.
module.exports.getProducto = (req, res) => {
    res.send('Leyendo producto ' + req.params.id);
}

//actualizar producto.
module.exports.putProducto = (req, res) => {
    res.send('Actualizando producto ' + req.params.id);
}

//eliminar producto.
module.exports.deleteProducto = (req, res) => {
    res.send('Eliminando producto ' + req.params.id);
}