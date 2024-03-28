const userController = require("../../controllers/v1/user_controller")

const routes = require("express").Router()


routes.get("/", function (req, res) {
    res.json({
        status: true,
        message: "Hello, Welcome in Rest API V1",
        data: null
    })
})

routes.get("/users", userController.show)
routes.post("/users", userController.create)


module.exports = routes