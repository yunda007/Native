const Index = require("../model/Index")

module.exports = {
    index: function(req, res) {
        Index.get(req.con, function(err, rows) {
            res.render("index/index", { data: rows })
        })
    },

    create: function(req, res) {
        res.render("index/create")
    },

    store: function(req, res) {
        Index.create(req.con, req.body, function(err) {
            res.redirect("/index")
        })
    },

    edit: function(req, res) {
        Index.getById(req.con, req.params.id, function(err, rows) {
            res.render("index/edit", { data: rows[0] })
        })
    },

    update: function(req, res) {
        Index.update(req.con, req.body, req.params.id, function(err) {
            res.redirect("/index")
        })
    },

    destroy: function(req, res) {
        Index.destroy(req.con, req.params.id, function(err) {
            res.redirect("/index")
        })
    }
}