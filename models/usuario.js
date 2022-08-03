const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    nombre: String,
    usuario: String,
    password: String,
    tipo: 'A' | 'B' | 'C',
    aprobado: Boolean | null
});

module.exports = mongoose.model('usuarios', schema);