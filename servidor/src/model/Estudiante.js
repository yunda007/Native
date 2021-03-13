const pool = require('../database');

module.exports = {
    get: function(con, callback) {
        pool.query("SELECT * FROM estudiantes", callback)
    },

    getById: function(con, id, callback) {
        pool.query(`SELECT * FROM estudiantes WHERE id_estudiante = ${id}`, callback)
    },

    create: function(con, data, callback) {
        pool.query(
            `INSERT INTO estudiantes SET 
        nombre = '${data.nombre}', 
        apellido = '${data.apellido}',
        edad = '${data.edad}', 
        telefono = '${data.telefono}', 
        email = '${data.email}',
        acudiente = '${data.acudiente}',
        foto = '${data.foto}'`,
            callback
        )
    },

    update: function(con, data, id, callback) {
        pool.query(
            `UPDATE estudiantes SET 
            nombre = '${data.nombre}', 
            apellido = '${data.apellido}',
            edad = '${data.edad}', 
            telefono = '${data.telefono}', 
            email = '${data.email}',
            acudiente = '${data.acudiente}',
            foto = '${data.foto}' 
        WHERE id_estudiante = ${id}`,
            callback
        )
    },

    destroy: function(con, id, callback) {
        pool.query(`DELETE FROM estudiantes WHERE id_estudiante = ${id}`, callback)
    }
}