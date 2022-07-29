//agregar producto.
module.exports.postProducto = (req, res) => {
    res.send('Agregando producto.');
    res.end();
}

//leer productos.
module.exports.getProductos = (req, res) => {
    res.send('Leyendo productos.');
    res.end();
}

//leer producto.
module.exports.getProducto = (req, res) => {
    res.send('Leyendo producto ' + req.params.id);
    res.end();
}

//actualizar producto.
module.exports.putProducto = (req, res) => {
    res.send('Actualizando producto ' + req.params.id);
    res.end();
}

//eliminar producto.
module.exports.deleteProducto = (req, res) => {
    res.send('Eliminando producto ' + req.params.id);
    res.end();
}