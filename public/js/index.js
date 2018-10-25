const socket = io();

socket.on('connect', function () {
	console.log('Connected to server');
});  


socket.on('disconnect', function () {
	console.log('Disconnected from server');
});


socket.on('newMessage', (message) => {
	console.log('newMessage: ', message);
})

/*--------------------------------*/
socket.emit('createMessage', {
	from: 'Ali',
	text: 'Hola'
}, function (data) {
	console.log('Got IT', data);
});
