//agregar empresa.
module.exports.postEmpresa = (req, res) => {
    res.send('Agregando empresa.')
}

//leer empresas.
module.exports.getEmpresas = (req, res) => {
    res.send('Leyendo empresas.');
}

//leer empresa.
module.exports.getEmpresa = (req, res) => {
    res.send('Leyendo empresa ' + req.params.id);
}

//actualizar empresa.
module.exports.putEmpresa = (req, res) => {
    res.send('Actualizando empresa ' + req.params.id);
}

//eliminar empresa.
module.exports.deleteEmpresa = (req, res) => {
    res.send('Eliminando empresa ' + req.params.id);
}