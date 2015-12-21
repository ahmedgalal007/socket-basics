var socket = io();
var now = moment();
var room = getQueryVariable('room');
var name = getQueryVariable('name') || 'Anonymous';
socket.on('connect', function () {
	console.log('Connected to socket.io server! ');
});

socket.on('message', function (message) {
	var momentTimestamp = moment.utc(message.timestamp);
	var $message = jQuery('.messages');
	console.log('New Message:');
	console.log(message.text);
	$message.append('<p><strong>' + message.name + ' ' + momentTimestamp.local().format('h:mm a ') + '</strong></p>')
	$message.append('<p>' + message.text + '</p>');
});

// Handels submitting of new message
var $form = jQuery('#message-form');


$form.on('submit', function (event) {
	event.preventDefault();
	var $message = $form.find('input[name=message]');
	socket.emit('message', {
		name: name,
		text: $message.val(),
		// timestamp: now.format('h:mm a')
	});

	$message.val('');

});