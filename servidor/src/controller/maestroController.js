const Maes = require("../model/Maestro")
const pool = require('../database');

module.exports = {
    index: function(req, res) {
        Maes.get(req.pool, function(err, rows) {
            res.render("maestro/index", { data: rows })
        })
    },

    create: function(req, res) {
        res.render("maestro/create")
    },

    store: function(req, res) {
        Maes.create(req.con, req.body, function(err) {
            res.redirect("/maestro")
        })
    },

    edit: function(req, res) {
        Maes.getById(req.con, req.params.id, function(err, rows) {
            res.render("maestro/edit", { data: rows[0] })
        })
    },

    update: function(req, res) {
        Maes.update(req.con, req.body, req.params.id, function(err) {
            res.redirect("/maestro")
        })
    },

    destroy: function(req, res) {
        Index.destroy(req.con, req.params.id, function(err) {
            res.redirect("/maestro")
        })
    }
}