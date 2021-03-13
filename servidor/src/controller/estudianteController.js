const Estu = require("../model/Estudiante")

module.exports = {
    index: function(req, res) {
        Estu.get(req.pool, function(err, rows) {
            res.render("estudiante/index", { data: rows })
        })
    },

    create: function(req, res) {
        res.render("estudiante/create")
    },

    store: function(req, res) {
        Estu.create(req.con, req.body, function(err) {
            res.redirect("/estudiante")
        })
    },

    edit: function(req, res) {
        Estu.getById(req.con, req.params.id, function(err, rows) {
            res.render("estudiante/edit", { data: rows[0] })
        })
    },

    update: function(req, res) {
        Estu.update(req.con, req.body, req.params.id, function(err) {
            res.redirect("/estudiante")
        })
    },

    destroy: function(req, res) {
        Estu.destroy(req.con, req.params.id, function(err) {
            res.redirect("/estudiante")
        })
    }
}