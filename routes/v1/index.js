const userController = require("../../controllers/v1/user_controller")
const accountController = require("../../controllers/v1/account_controller")
const transactionController = require("../../controllers/v1/transaction_controller")

const routes = require("express").Router()


routes.get("/", function (req, res) {
    res.json({
        status: true,
        message: "Hello, Welcome in Rest API V1",
        data: null
    })
})

routes.get("/users", userController.index)
routes.get("/users/:userId", userController.show)
routes.post("/users", userController.create)

routes.get("/accounts", accountController.index)
routes.get("/accounts/:accountId", accountController.show)
routes.post("/accounts", accountController.create)
routes.patch("/accounts/balance", accountController.upBalance)

routes.get("/transactions", transactionController.index)
routes.get("/transactions/:id", transactionController.show)
routes.post("/transactions", transactionController.create)


module.exports = routes