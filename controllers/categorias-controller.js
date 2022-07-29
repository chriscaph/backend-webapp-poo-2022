//agregar categoria.
module.exports.postCategoria = (req, res) => {
    res.send('Agregando categoria.')
}

//leer categorias.
module.exports.getCategorias = (req, res) => {
    res.send('Leyendo categorias.');
}

//leer categoria.
module.exports.getCategoria = (req, res) => {
    res.send('Leyendo categoria ' + req.params.id);
}

//actualizar categoria.
module.exports.putCategoria = (req, res) => {
    res.send('Actualizando categoria ' + req.params.id);
}

//eliminar categoria.
module.exports.deleteCategoria = (req, res) => {
    res.send('Eliminando categoria ' + req.params.id);
}