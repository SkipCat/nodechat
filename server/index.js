// Create basic HTTP server
const server = require('http').createServer()
const io = require('socket.io')(server, { path: '/' })

server.listen(50437)

io.on('connnection', socket => {
	console.log('Hello', socket.id)
})
