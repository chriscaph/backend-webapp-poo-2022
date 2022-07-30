const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const database = require('./modules/database');

const usuariosRouter = require('./routes/usuarios-router');
const categoriasRouter = require('./routes/categorias-router');
const empresasRouter = require('./routes/empresas-router');
const productosRouter = require('./routes/productos-router');
const ordenesRouter = require('./routes/ordenes-router');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: '12345',
    resave: true,
    saveUninitialized: true
}));

app.use('/usuarios', usuariosRouter);
app.use('/categorias', categoriasRouter);
app.use('/empresas', empresasRouter);
app.use('/productos', productosRouter);
app.use('/ordenes', ordenesRouter);

app.get('/', (req, res) => {
    res.send('Petición recibida.');
});

app.listen(4200, () => {
    console.log('Servidor levantado.');
});