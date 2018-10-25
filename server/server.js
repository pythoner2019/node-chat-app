const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
//
const publicPath = path.join(__dirname, '../public');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
//
app.use(express.static(publicPath));

//
io.on('connection', (socket) => {
	console.log('New User Connected..');

	socket.emit('newEmail', {
		from: 'mike@example.com',
		text: 'hey, welcome here sir',
		createdAt: 123
	});

	socket.on('createEmail', (newEmail) => {
		console.log('createEmail', newEmail);
	})

	socket.on('disconnect', () => {
		console.log('User disconnected!');
	});
});



//
const port = process.env.PORT || 3000;
server.listen(port, () => {
	console.log(`Server running on ${port}`);
});











