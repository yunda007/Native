const rol = require("../model/Rol")

module.exports = {
    index: function(req, res) {
        rol.get(req.pool, function(err, rows) {
            res.render("rol/index", { data: rows })
        })
    },


}