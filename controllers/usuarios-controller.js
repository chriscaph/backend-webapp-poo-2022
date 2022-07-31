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


//obtener usuarios motoristas
module.exports.getUsuariosMotoristas = (req, res) => {
    usuario.find({tipo: 'B'}, {nombre: true, ordenesTomadas: true, _id: true, ordenesEntregadas: true, aprobado: true})
    .then(data => {
        res.send(data);
        res.end();
    })
    .catch(error => {
        res.send(error);
        res.end();
    })
}

//asignar orden usuarios motoristas
module.exports.putUsuarioOrdenMotoristas = (req, res) => {
    usuario.find({_id: req.params.id})
    .then(data => {
        let o = data[0];
        o.ordenesTomadas.push(req.body.nombre);
        usuario.updateOne({_id: req.params.id}, o)
            .then(data => {
                res.send({ codigo: 1, mensaje: 'Orden asignada al motorista.' });
                res.end();
            })
            .catch(error => {
                res.send({ codigo: 0, mensaje: 'La orden no ha sido asignada.' });
                res.end();
            });
    })
    .catch(error => {
        console.log('Error al obtener usuario motorista.');
    });
}

module.exports.putUsuarioMotorista = (req, res) => {
    usuario.find({_id: req.params.id})
    .then(data => {
        let o = data[0];
        o.aprobado = req.body.aprobado;
        usuario.updateOne({_id: req.params.id}, o)
            .then(data => {
                res.send({ codigo: 1, mensaje: 'Cambios realizados.' });
                res.end();
            })
            .catch(error => {
                res.send({ codigo: 0, mensaje: 'Los cambios no han sido realizados.' });
                res.end();
            });
    })
    .catch(error => {
        console.log('Error al obtener al usuario.');
    });
}