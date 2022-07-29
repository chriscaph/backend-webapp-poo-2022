const express = require('express');
const router = express.Router();
//agregar el modelo de la orden.
const mongoose = require('mongoose');

const controller = require('../controllers/ordenes-controller');

router.post('/', controller.postOrden)
router.get('/', controller.getOrdenes);
router.get('/:id', controller.getOrden);
router.put('/:id', controller.putOrden);
router.delete('/:id', controller.deleteOrden);

module.exports = router;