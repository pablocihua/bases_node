
var socket = io(),
    search = window.location.search;

var searchParams = new URLSearchParams(search);
var person = {};

if (!searchParams.has('name') || !searchParams.has('room')) {
    window.location = "index.html";
    throw new Error('The name and room are required');
} else {
    person.name = searchParams.get('name');
    person.room = searchParams.get('room');
}

socket.on('connect', function() {
    console.log('Conectado al servidor');
    socket.emit('enterChat', person, function(resp) {
        // console.log(resp);
        renderizetPerson( resp );
    });
});
// Listening
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');
});
// Listening information
socket.on('createMessage', function(message) {
    // console.log('Server:', message);
    renderizetMessage( message, false );
    scrollBottom();
});
// Listening all changes
socket.on('listToPerson', function(resp) {
    // console.log(resp);
    renderizetPerson( resp );
});
// Private message - The client is listening.
socket.on('privateMessage',function( resp ){
    console.log('Private Message: ', resp );
});
