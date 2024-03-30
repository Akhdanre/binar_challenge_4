const express = require("express")
const app = express()
const port = 3000
const routes = require("./routes/v1/index")
const webResponse = require("./helper/web_response")

app.use(express.json())

app.use("/api/v1", routes)

app.use((err, req, res, next) => {
    console.log(err.message)
    webResponse(res, {
        code: 500,
        message: "INTERNAL SERVER ERROR",
        isSucces: false
    })
})

app.use((req, res, next) => {
    webResponse(res, {
        code: 404,
        message: "NOT FOUND",
        isSucces: false
    })
})

app.listen(port, () => {
    console.log("server run in port", port)
})
