//agregar usuario.
module.exports.postUsuario = (req, res) => {
    res.send('Agregando usuario.');
    res.end();
}

//leer usuarios.
module.exports.getUsuarios = (req, res) => {
    res.send('Leyendo usuarios.');
    res.end();
}

//leer usuario.
module.exports.getUsuario = (req, res) => {
    res.send('Leyendo usuario ' + req.params.id);
    res.end();
}

//actualizar usuario.
module.exports.putUsuario = (req, res) => {
    res.send('Actualizando usuario ' + req.params.id);
    res.end();
}

//eliminar usuario.
module.exports.deleteUsuario = (req, res) => {
    res.send('Eliminando usuario ' + req.params.id);
    res.end();
}