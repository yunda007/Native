const pool = require('../database');

module.exports = {
    get: function(con, callback) {
        pool.query("SELECT * FROM maestros", callback)
    },

    getById: function(con, id, callback) {
        pool.query(`SELECT * FROM maestros WHERE id_maestro = ${id}`, callback)
    },

    create: function(con, data, callback) {
        pool.query(
            `INSERT INTO maestros SET 
        nombre = '${data.nombre}', 
        apellido = '${data.apellido}',
        edad = '${data.edad}', 
        telefono = '${data.telefono}', 
        email = '${data.email}',
        especializado = '${data.especializado}',
        foto = '${data.foto}'`,
            callback
        )
    },

    update: function(con, data, id, callback) {
        pool.query(
            `UPDATE maestros SET 
            nombre = '${data.nombre}', 
            apellido = '${data.apellido}',
            edad = '${data.edad}', 
            telefono = '${data.telefono}', 
            email = '${data.email}',
            especializado = '${data.especializado}',
            foto = '${data.foto}' 
        WHERE id_maestro = ${id}`,
            callback
        )
    },

    destroy: function(con, id, callback) {
        pool.query(`DELETE FROM maestros WHERE id_maestro = ${id}`, callback)
    }
}