const mongoose = require('mongoose');

const bd = 'delivery';
const port = '27017';
const host = 'localhost';

class DataBase {
    constructor() {
        this.conectar();
    }

    conectar() {
        mongoose.connect(`mongodb://${host}:${port}/${bd}`)
        .then(result => {
            console.log('Se conectó a MongoDB.');
        })
        .catch(error => {
            console.log('Error al conectarse a MongoDB.');
        });
    }
}

module.exports = new DataBase();