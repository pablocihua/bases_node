
const { io } = require('../server'), { People } = require('../classes/people'),
      { createMessage } = require('../utils/utils'),
      people = new People();


io.on('connection', (client) => {
    console.log('USer connected');
    client.on('enterChat', (person, callback) => {
        if( !person.name || !person.room ){
            return callback({
                error: true,
                message: 'The name/room are required'
            });
        }

        client.join( person.room );

        people.addPeople( client.id, person.name, person.room );
        
        client.broadcast.to( person.room ).emit('listToPerson', people.getPeopleByRoom( person.room ));
        
        let _people = people.getPeopleByRoom( person.room );
        callback(_people);
    });

    client.on('createMessage', ( data ) => {
        let person = people.getPerson( client.id ),
            message = createMessage( person.name, data.message );

        client.broadcast.to( person.room ).emit('createMessage', message );
    });

    client.on('disconnect', () => {
        let personDeleted = people.deletePerson(client.id),
            newMessage = createMessage(
                'Administrator',
                `${ personDeleted.name } left the chat`
            );

        client.broadcast.to( personDeleted.room ).emit('createMessage', newMessage );
        client.broadcast.to( personDeleted.room ).emit('listToPerson', people.getPeopleByRoom( personDeleted.room ));
    });

    client.on('privateMessage', ( data ) => {
        let person = people.getPerson( client.id );
            let newMessage = createMessage(
                person.name,
                data.message
            );

        client.broadcast.to( data.to ).emit('privateMessage', newMessage );
    });

});