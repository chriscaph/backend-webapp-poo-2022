const express = require('express');
const router = express.Router();
const usuario = require('../models/usuario');
const mongoose = require('mongoose');

const controller = require('../controllers/usuarios-controller');

router.post('/', controller.postUsuario);
router.get('/', controller.getUsuarios);
router.get('/motoristas', controller.getUsuariosMotoristas);
router.put('/motoristas/asignarOrden/:id', controller.putUsuarioOrdenMotoristas);
router.get('/:id', controller.getUsuario);
router.put('/:id', controller.putUsuario);
router.delete('/:id', controller.deleteUsuario);

router.post('/login', controller.postUsuarioLogin);

module.exports = router;