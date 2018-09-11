var socket = io(),
    search = window.location.search;

var searchParams = new URLSearchParams(search);
var person = {};

if (!searchParams.has('name')) {
    window.location = "index.html";
    throw new Error('The name is required');
} else {
    person.name = searchParams.get('name');
}

socket.on('connect', function() {
    console.log('Conectado al servidor');
    socket.emit('enterChat', person, function(resp) {
        console.log(resp);
    });
});

// Listening
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');
});

// Listening information
socket.on('createMessage', function(message) {

    console.log('Server:', message);
});

// Listening all changes
socket.on('listToPerson', function(resp) {
    console.log(resp);
});

/* // Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Pablo',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});
*/