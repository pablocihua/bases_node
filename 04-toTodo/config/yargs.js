const description = {
    demand: true,
    alias: 'd',
    desc: 'Task to do!'
},
completed = {
    default: true,
    alias: 'c',
    desc: 'Checks completed or pending a task'
},
argv = require('yargs')
    .command(
        'creates',
        'Creates a element by todo', {
            description
        }
    )
    .command(
        'lists',
        'Show in console the list', {
        type: {
            alias: 't',
            desc: 'List kind of task: completed -> true / false'
        }
    })
    .command(
        'updates',
        'Updates the comĺeted status of a taks', {
            description,
            completed
        }
    )
    .command(
        'delete',
        'Delete a task, by default it is true', {
            description,
            completed
        }
    )
    .help()
    .argv;

module.exports = {
    argv
};