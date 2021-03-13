const pool = require('../database');
module.exports = {
    get: function(con, callback) {
        pool.query("SELECT * FROM productos", callback)
    },

    getById: function(con, id, callback) {
        pool.query(`SELECT * FROM productos WHERE id_producto = ${id}`, callback)
    },

    create: function(con, data, callback) {
        pool.query(
            `INSERT INTO productos SET 
        nombre = '${data.nombre}', 
        total = '${data.total}'`,
            callback
        )
    },

    update: function(con, data, id, callback) {
        pool.query(
            `UPDATE productos SET 
        nombre = '${data.nombre}', 
        total = '${data.total}' 
        WHERE id_producto = ${id}`,
            callback
        )
    },

    destroy: function(con, id, callback) {
        pool.query(`DELETE FROM productos WHERE id_producto = ${id}`, callback)
    }
}