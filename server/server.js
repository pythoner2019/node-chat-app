const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
//
const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
//
app.use(express.static(publicPath));

//
io.on('connection', (socket) => {
	console.log('New User Connected..');

	socket.emit('newMessage', generateMessage('Admin', 'Welcome To The Chat App'));

	socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User Joined!'));

	socket.on('createMessage', (message) => {
		console.log('The Message is: ', message);
		
		io.emit('newMessage', generateMessage(message.from, message.text));
	});

	socket.on('disconnect', () => {
		console.log('User disconnected!');
	});
});



//
const port = process.env.PORT || 3000;
server.listen(port, () => {
	console.log(`Server running on ${port}`);
});











