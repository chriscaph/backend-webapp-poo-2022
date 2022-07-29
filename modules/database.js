const mongoose = require('mongoose');

const user = 'chris_caph';
const password = '30B64aVWgp4VWnbz';

class DataBase {
    constructor() {
        this.conectar();
    }

    conectar() {
        mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.xrdtm.mongodb.net/?retryWrites=true&w=majority`)
        .then(result => {
            console.log('Se conectó a MongoDB.');
        })
        .catch(error => {
            console.log('Error al conectarse a MongoDB.');
        });
    }
}

module.exports = new DataBase();