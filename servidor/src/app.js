const express = require("express")
const app = express()
var methodOverride = require("method-override")
const path = require("path")
const { allowedNodeEnvironmentFlags } = require('process');
const con = require("./config/db.js")

//configuraciones
// Using pug template engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

// connecting route to database
app.use(function(req, res, next) {
    req.con = con
    next()
})

// parsing body request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

// include router
const indexRouter = require("./routes/indexRouter")
const maestroRouter = require("./routes/maestroRouter")
const estudianteRouter = require("./routes/estudianteRouter")
const materiaRouter = require("./routes/materiaRouter")
const rolRouter = require("./routes/rolRouter")

// routing
app.use("/index", indexRouter)
app.use("/maestro", maestroRouter)
app.use("/estudiante", estudianteRouter)
app.use("/materia", materiaRouter)
app.use("/rol", rolRouter)


// starting server
app.listen(4000, function() {
    console.log("El servidor esta listo en 4000")
})