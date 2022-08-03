const categoria = require('../models/categoria');

//agregar categoria.
module.exports.postCategoria = (req, res) => {
    let c = new categoria({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imagen: `http://localhost:4200/public/${req.file.originalname}`
    });
    c.save()
    .then(data => {
        res.send({codigo: 1, mensaje: 'Categoría agregada con éxito.'});
        console.log('agregada a la colección.');
        res.end();
    })
    .catch(error => {
        res.send({codigo:0, mensaje: 'Error al añadir la categoría.'});
        console.log('no agregada a la colección.');
        res.end();
    });
}

//leer categorias.
module.exports.getCategorias = (req, res) => {
    categoria.find()
    .then(data => {
        res.send(data);
        res.end();
    })
    .catch(error => {
        res.send(error);
        res.end();
    });
}

//leer categoria.
module.exports.getCategoria = (req, res) => {
    categoria.find({_id: req.params.id})
    .then(data => {
        res.send(data[0]);
        res.end();
    })
    .catch(error => {
        res.send(error);
        res.end();
    });
}

//actualizar categoria.
module.exports.putCategoria = (req, res) => {

    if (req.file) {
        req.body.imagen = `http://localhost:4200/public/${req.file.originalname}`
    }

    categoria.updateOne({_id: req.params.id}, {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen
    })
    .then(data => {
        res.send({codigo: 1, mensaje: '¡Categoría actualizada!'});
        res.end();
    })
    .catch(error => {
        res.send({codigo: 0, mensaje: 'Error al actualizar la categoría.'});
        res.end();
    });
}

//eliminar categoria.
module.exports.deleteCategoria = (req, res) => {
    categoria.remove({_id: req.params.id})
    .then(() => {
        res.send({codigo: 1, mensaje: 'Categoría eliminada.'});
    })
    .catch(() => {
        res.send({codigo: 0, mensaje: 'No se eliminó la categoría.'});
    });
}