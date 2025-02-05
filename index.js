const http = require('http')
const {hello, greetings} = require('./helloWorld')
const moment = require('moment')

const server = http.createServer((req, res) => {
    
    // res.write(hello)
    // res.write(greetings())
    const url = req.url;
    if(url === '/users'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/json')
        res.write(JSON.stringify({
            status: 'success',
            message: 'Users',
            date: moment().format('MMMM Do YYYY, h:mm:ss a')
        }))
    }
    else if(url === '/post'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/json')
        res.write(JSON.stringify({
            status: 'success',
            message: 'Post',
            date: moment().format('MMMM Do YYYY, h:mm:ss a')
        }))
    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/json')
        res.write(JSON.stringify({
            status: 'not found',
            message: 'Route tidak ditemukan',
            date: moment().format('MMMM Do YYYY, h:mm:ss a')
        }))
    }
    res.end()
})

const hostname = "127.0.0.1"
const port = 3000
server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}`))