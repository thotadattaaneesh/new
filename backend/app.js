const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()

app.use(express.json())
app.use(cookieParser())
const rest = require("./routes/restaurentRoute")


app.use("/api/v1",rest)
module.exports = app