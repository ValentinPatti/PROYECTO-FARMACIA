const verificarRol = (...rolesPermitidos) => {

    return (req, res, next) => {

        if (!rolesPermitidos.includes(req.user.rol)) {
            return res.status(403).json({
                message: "No tiene permisos para acceder"
            });
        }

        next();

    };

};

module.exports = verificarRol;