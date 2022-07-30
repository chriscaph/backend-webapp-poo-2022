const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: String,
    descripcion: String,
    imagen: String
});

module.exports = mongoose.model('categorias', schema);