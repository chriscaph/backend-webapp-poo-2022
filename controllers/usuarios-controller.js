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


//login usuario A.
module.exports.postUsuarioLoginA = (req, res) => {
    usuario.find({usuario: req.body.usuarioLogin, password: req.body.passwordLogin, tipo: 'A'})
        .then(data => {
            console.log(data);
            if (data.length == 0) {
                res.redirect('http://localhost/administrador/login.html')
                res.end();
            } else {
                res.redirect('http://localhost/administrador/administrador.html');
                res.end();
            }
        })
}

//login usuario B.
module.exports.postUsuarioLoginB = (req, res) => {
    
}

//login usuario C.
module.exports.postUsuarioLoginC = (req, res) => {
    
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

//aprobar usuario motorista.
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