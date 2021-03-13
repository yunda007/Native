const pool = require('../database');

module.exports = {
    get: function(con, callback) {
        pool.query("SELECT * FROM materias", callback)
    },

    getById: function(con, id, callback) {
        pool.query(`SELECT * FROM materias WHERE id_materia = ${id}`, callback)
    },

    create: function(con, data, callback) {
        pool.query(
            `INSERT INTO materias SET 
        materia = '${data.materia}' `,
            callback
        )
    },

    update: function(con, data, id, callback) {
        pool.query(
            `UPDATE materias SET 
            materia = '${data.materia}' 
             
        WHERE id_maestro = ${id}`,
            callback
        )
    },

    destroy: function(con, id, callback) {
        pool.query(`DELETE FROM materias WHERE id_materia = ${id}`, callback)
    }
}