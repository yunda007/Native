const Mate = require("../model/Materias")

module.exports = {
    index: function(req, res) {
        Mate.get(req.pool, function(err, rows) {
            res.render("materia/index", { data: rows })
        })
    },

    create: function(req, res) {
        res.render("materia/create")
    },

    store: function(req, res) {
        Mate.create(req.con, req.body, function(err) {
            res.redirect("/materia")
        })
    },

    edit: function(req, res) {
        Mate.getById(req.con, req.params.id, function(err, rows) {
            res.render("materia/edit", { data: rows[0] })
        })
    },

    update: function(req, res) {
        Mate.update(req.con, req.body, req.params.id, function(err) {
            res.redirect("/materia")
        })
    },

    destroy: function(req, res) {
        Mate.destroy(req.con, req.params.id, function(err) {
            res.redirect("/materia")
        })
    }
}