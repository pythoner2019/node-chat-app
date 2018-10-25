const socket = io();

socket.on('connect', function () {
	console.log('Connected to server');

	socket.emit('createEmail', {
		to: 'jen@example.com',
		text: 'hey'
	})
});

socket.on('disconnect', function () {
	console.log('Disconnected from server');
});


socket.on('newEmail', function (email) {
	console.log('New Email', email);
})
