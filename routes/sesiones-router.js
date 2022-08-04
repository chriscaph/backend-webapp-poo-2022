const express = require('express');
const router = express.Router();

const controller = require('../controllers/sesiones-controller');

router.get('/:id', controller.getSession);

module.exports = router;