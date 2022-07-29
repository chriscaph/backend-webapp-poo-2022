const express = require('express');
const router = express.Router();
//agregar el modelo de la empresa.
const mongoose = require('mongoose');

const controller = require('../controllers/empresas-controller');

router.post('/', controller.postEmpresa)
router.get('/', controller.getEmpresas);
router.get('/:id', controller.getEmpresa);
router.put('/:id', controller.putEmpresa);
router.delete('/:id', controller.deleteEmpresa);

module.exports = router;