const express = require("express")
const app = express()
const port = 3000
const routes = require("./routes/v1/index")

app.use(express.json())

app.use("/api/v1", routes)

app.listen(port, () => {
    console.log("server run in port", port)
})
