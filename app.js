require("dotenv").config()
require("express-async-error")

const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")
const connectDB = require("./db/connect")

const updatesRoute = require("./routes/updates")

// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.use("/api/v1", updatesRoute)

app.get("/", (req, res) => {
  res.send("Testing 123...")
})

const port = process.env.port || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
