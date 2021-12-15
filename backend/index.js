const express = require("express")
const app = express()
const cors = require("cors")
const allRoutes = require('./routes/allRoutes')

app.use(cors())
app.use(express.json())

app.use('/', allRoutes)


const port = 5000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})