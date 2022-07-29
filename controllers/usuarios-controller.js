//agregar usuario.
module.exports.postUsuario = (req, res) => {
    res.send('Agregando usuario.')
}

//leer usuarios.
module.exports.getUsuarios = (req, res) => {
    res.send('Leyendo usuarios.');
}

//leer usuario.
module.exports.getUsuario = (req, res) => {
    res.send('Leyendo usuario ' + req.params.id);
}

//actualizar usuario.
module.exports.putUsuario = (req, res) => {
    res.send('Actualizando usuario ' + req.params.id);
}

//eliminar usuario.
module.exports.deleteUsuario = (req, res) => {
    res.send('Eliminando usuario ' + req.params.id);
}