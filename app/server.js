const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 3000




const app = express()
// app.use(cors)
// const cors = require('cors')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})