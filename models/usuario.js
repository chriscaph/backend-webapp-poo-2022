const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: String,
    usuario: String,
    password: String,
    tipo: 'A' | 'B' | 'C',
    aprobado: {type: Boolean | null, required: function(){return this.tipo == 'B';}},
    ordenesTomadas: {type: [String], required: function(){return this.tipo == 'B';}},
    ordenesEntregadas: {type: [String], required: function(){return this.tipo == 'B';}}
});

module.exports = mongoose.model('usuario', schema);