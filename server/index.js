const express = require('express')
require('dotenv').config();
const PORT = 5000
const app = express()
const mailRoute = require('./routes/mailRoute')

app.use(express.json())
app.use('/', mailRoute)

app.listen(PORT, () => {
    console.log("Server running on " + PORT)
})
