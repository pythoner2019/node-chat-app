const socket = io();

socket.on('connect', function () {
	console.log('Connected to server');

	socket.emit('createMessage', {
		from: 'Muhammed',
		text: 'Yup, that is work'
	});
});

socket.on('disconnect', function () {
	console.log('Disconnected from server');
});


socket.on('newMessage', (message) => {
	console.log('NewMessage', message);
})
