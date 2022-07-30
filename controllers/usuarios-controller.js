const usuario = require('../models/usuario');

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


//login usuario.
module.exports.postUsuarioLogin = (req, res) => {
    usuario.find({usuario: req.body.usuarioLogin, password: req.body.passwordLogin, tipo: 'A'})
    .then(data => {
        if (data.length == 0) {
            res.send({codigo: 1, mensaje: 'El usuario no existe.'})
        } else {
            req.session.nombre = data[0].nombre;
            req.session.usuario = data[0].usuario;
            req.session.tipo = data[0].tipo;
            res.send(req.session);
            res.end();
        }
    })
    .catch(error => {
        res.send(error);
        res.end();
    });
}