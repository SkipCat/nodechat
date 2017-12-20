// Create basic HTTP server
const server = require('http').createServer()
const io = require('socket.io')(server, { path: '/' })

server.listen(50437)

io.on('connection', clientSocket => {
	console.info('Hello', clientSocket.id)

	// A client sends a message object to the server
	clientSocket.on('message', message => {
		console.info(`[message] ${message.author} wrote: ${message.text} t bonne`)

		// The server broadcasts the message to all other connected clients
		clientSocket.broadcast.emit('message', message)
	})
})
