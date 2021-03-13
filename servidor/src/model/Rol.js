const pool = require('../database');

module.exports = {
    get: function(con, callback) {
        pool.query("SELECT u.* FROM USER u, roles r, compro c WHERE u.id_rol=r.id_rol AND u.id_compro=c.id_compro", callback)
    },

}