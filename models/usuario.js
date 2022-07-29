const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: String,
    usuario: String,
    password: String,
    tipo: 'A' | 'B' | 'C',
    aprobado: Boolean | null,
    ordenesTomadas: Array | null,
    ordenesEntregadas: Array | null
});

module.exports = mongoose.model('usuarios', schema);