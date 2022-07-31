const producto = require('../models/producto');

//agregar producto.
module.exports.postProducto = (req, res) => {
    let p = new producto(req.body);
    p.save()
    .then(data => {
        res.send({codigo: 1, mensaje: 'Producto agregado con éxito.'});
        res.end();
    })
    .catch(error => {
        res.send({codigo:0, mensaje: 'Error al añadir le producto.'});
        res.end();
    });
}

//leer productos.
module.exports.getProductos = (req, res) => {
    producto.find()
    .then(data => {
        res.send(data);
        res.end();
    })
    .catch(error => {
        res.send(error);
        res.end();
    });
}

//leer producto.
module.exports.getProducto = (req, res) => {
    producto.find({_id: req.params.id})
    .then(data => {
        res.send(data[0]);
        res.end();
    })
    .catch(error => {
        res.send(error);
        res.end();
    });
}

//actualizar producto.
module.exports.putProducto = (req, res) => {
    producto.update({_id: req.params.id}, req.body)
    .then(data => {
        res.send({codigo: 1, mensaje: 'Producto actualizado!'});
        res.end();
    })
    .catch(error => {
        res.send({codigo: 0, mensaje: 'Error al actualizar el producto.'});
        res.end();
    });
}

//eliminar producto.
module.exports.deleteProducto = (req, res) => {
    producto.remove({_id: req.params.id})
    .then(() => {
        res.send({codigo: 1, mensaje: 'Producto eliminado.'});
    })
    .catch(() => {
        res.send({codigo: 0, mensaje: 'No se eliminó el producto.'});
    });
}