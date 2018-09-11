const { io } = require('../server'), { Users } = require('../classes/user'),
    users = new Users();


io.on('connection', (client) => {

    console.log('USer connected');

    client.on('enterChat', (person, callback) => {
        if (!person.name) {
            return callback({
                error: true,
                message: 'The name is required'
            });
        }

        let people = users.addPeople(client.id, person.name);

        client.broadcast.emit('listToPerson', users.getPeople());

        callback(people);
    });

    client.on('disconnect', () => {
        let personDeleted = users.deletePerson(client.id);
        console.log(personDeleted)
        client.broadcast.emit('createMessage', {
            person: 'Administrator',
            message: `${ personDeleted.name } left the chat`
        });
        client.broadcast.emit('listToPerson', users.getPeople());
    });

});