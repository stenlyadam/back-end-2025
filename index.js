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
app.post('/contoh', (req, res) => res.send('request method POST'))
app.put('/contoh', (req, res)=> res.send("Request method PUT"))
app.delete('/contoh', (req, res) => res.send("Request method DELETE"))
app.patch('/contoh', (req,res) => res.send("Request method PATCH"))

app.all('/universal', (req, res) => res.send(`Request method ${req.method}`))
// Routing dinamis 
// 1. Menggunakan params
app.get('/post/:id', (req, res)=> res.send(`Artikel ke - ${req.params.id}`))
// 2. Menggunakan Query String
app.get('/post', (req,res) => {
    const {page, sort} = req.query;
    res.send(`Query string= page :${page}, sort : ${sort}`)
})

const hostname = "127.0.0.1"
const port = 3000
app.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}`))