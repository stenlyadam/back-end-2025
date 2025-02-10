const http = require('http')
const {hello, greetings} = require('./helloWorld')
const moment = require('moment')
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World'))
app.get('/about', (req, res) => res.status(200).json({
    status: 'success',
    message: 'About page',
    data: []
}))

const hostname = "127.0.0.1"
const port = 3000
app.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}`))