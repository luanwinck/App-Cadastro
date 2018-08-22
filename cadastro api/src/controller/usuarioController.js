const usuarios = require('../service/getUsuarioPorId')

exports.get = (req, res, next) => {
    let user = req.params.user;

    let usuariosFiltrados = usuarios.getUsuario(user)

    res.status(200).send(usuariosFiltrados);
};