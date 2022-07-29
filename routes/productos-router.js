const express = require('express');
const router = express.Router();

const controller = require('../controllers/productos-controller');

router.post('/', controller.postProducto)
router.get('/', controller.getProductos);
router.get('/:id', controller.getProducto);
router.put('/:id', controller.putProducto);
router.delete('/:id', controller.deleteProducto);

module.exports = router;