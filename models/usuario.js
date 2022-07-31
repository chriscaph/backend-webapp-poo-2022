const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    nombre: String,
    usuario: String,
    password: String,
    tipo: 'A' | 'B' | 'C',
    ordenesTomadas: Array | null,
    ordenesEntregadas: Array | null,
    aprobado: Boolean | null
});

module.exports = mongoose.model('usuarios', schema);