const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: String,
    estado: String,
    cliente: {
        nombre: String,
        telefono: String,
        correo: String
    },
    envio: {
        productos: Array,
        direccion: String,
        empresa: String,
        subtotal: Number,
        total: Number,
        coordenadas: {
            longitud: Number,
            latitud: Number
        },
        estado: String,
        isv: Number,
        comisionMotorista: Number,
        comisionAdministrador: Number,
        motorista: String
    }
});

module.exports = mongoose.model('ordenes', schema);