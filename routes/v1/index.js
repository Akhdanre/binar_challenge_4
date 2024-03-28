const routes = require("express").Router()


routes.get("/", function (req, res) {
    res.json({
        status: true,
        message: "Hello, Welcome in Rest API V1",
        data: null
    })
})


module.exports = routes