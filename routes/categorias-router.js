const express = require('express');
const router = express.Router();
//agregar el modelo de la categoría.
const mongoose = require('mongoose');

const controller = require('../controllers/categorias-controller');

router.post('/', controller.postCategoria)
router.get('/', controller.getCategorias);
router.get('/:id', controller.getCategoria);
router.put('/:id', controller.putCategoria);
router.delete('/:id', controller.deleteCategoria);

module.exports = router;