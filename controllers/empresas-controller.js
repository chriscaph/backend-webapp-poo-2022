//agregar empresa.
module.exports.postEmpresa = (req, res) => {
    res.send('Agregando empresa.');
    res.end();
}

//leer empresas.
module.exports.getEmpresas = (req, res) => {
    res.send('Leyendo empresas.');
    res.end();
}

//leer empresa.
module.exports.getEmpresa = (req, res) => {
    res.send('Leyendo empresa ' + req.params.id);
    res.end();
}

//actualizar empresa.
module.exports.putEmpresa = (req, res) => {
    res.send('Actualizando empresa ' + req.params.id);
    res.end();
}

//eliminar empresa.
module.exports.deleteEmpresa = (req, res) => {
    res.send('Eliminando empresa ' + req.params.id);
    res.end();
}