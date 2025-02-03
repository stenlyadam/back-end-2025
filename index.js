const http = require('http')
const {hello, greetings} = require('./helloWorld')
const moment = require('moment')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.write(hello)
    res.write(greetings())
    res.write(moment().format('MMMM Do YYYY, h:mm:ss a'))
    res.end()
})

const hostname = "127.0.0.1"
const port = 3000
server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}`))