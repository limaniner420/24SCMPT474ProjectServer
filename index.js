const express = require('express')
const cors = require('cors')
const app = express()

const addr = 'localhost'
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: '*'
}));

app.use('/', express.static("static", {index: "index.html"}))

app.listen(port, addr)
console.log(`Running on http://localhost:${port}`)