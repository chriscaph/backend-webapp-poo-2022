const categoria = require('../models/categoria');

//agregar categoria.
module.exports.postCategoria = (req, res) => {
    res.send('Agregando categoria.');
    res.end();
}

//leer categorias.
module.exports.getCategorias = (req, res) => {
    res.send('Leyendo categorias.');
    res.end();
}

//leer categoria.
module.exports.getCategoria = (req, res) => {
    res.send('Leyendo categoria ' + req.params.id);
    res.end();
}

//actualizar categoria.
module.exports.putCategoria = (req, res) => {
    res.send('Actualizando categoria ' + req.params.id);
    res.end();
}

//eliminar categoria.
module.exports.deleteCategoria = (req, res) => {
    res.send('Eliminando categoria ' + req.params.id);
    res.end();
}