const orden = require('../models/orden');

//agregar orden.
module.exports.postOrden = (req, res) => {
    res.send('Agregando orden.');
    res.end();
}

//leer ordenes.
module.exports.getOrdenes = (req, res) => {
    res.send('Leyendo ordenes.');
    res.end();
}

//leer orden.
module.exports.getOrden = (req, res) => {
    res.send('Leyendo orden ' + req.params.id);
    res.end();
}

//actualizar orden.
module.exports.putOrden = (req, res) => {
    orden.find({_id: req.params.id})
    .then(data => {
        let o = data[0];
        o.envio.motorista = req.body.nombre;
        o.estado = 'sinEntregar';
        o.envio.estado = 'tomada';
        orden.updateOne({_id: req.params.id}, o)
            .then(data => {
                res.send({ codigo: 1, mensaje: 'Orden actualizada.' });
                res.end();
            })
            .catch(error => {
                res.send({ codigo: 0, mensaje: 'La orden no ha sido actualizada.' });
                res.end();
            });
    })
    .catch(error => {
        console.log('Error al obtener usuario motorista.');
    });
}

//eliminar orden.
module.exports.deleteOrden = (req, res) => {
    res.send('Eliminando orden ' + req.params.id);
    res.end();
}


//leer ordenes disponibles.
module.exports.getOrdenesDisponibles = (req, res) => {
    orden.find({estado: 'disponible'})
    .then(data => {
        res.send(data);
        res.end();
    })
    .catch(error => {
        res.send(error);
        res.end();
    });
}