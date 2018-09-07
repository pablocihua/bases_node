const argv = require('./config/yargs').argv,
    colors =  require('colors');

const todo =  require('./todo/todo');

let command = argv._[ 0 ];

switch( command ){
    case 'creates':
        let task = todo.create( argv.description );
        console.log( task );
    break;
    case 'lists':
        let list = todo.list( argv.type );
        console.log('========================'.green );
        console.log(`=    Table of Tasks    =`.yellow );
        console.log('========================'.green) ;
        list.forEach( element => {
            console.log(`Task: ${ element.description.cyan } Finished: ${ colors.cyan( element.completed )}`);
        });
    break;
    case 'updates':
        let resp = todo.update( argv.description, argv.completed );
        console.log('Updates a taks by to do: '.yellow + colors.red( resp ));
    break;
    case 'delete':
        let respa = todo.delete( argv.description, argv.completed );
        console.log( respa );
    break;
    default:
        console.log('Command inknown')
}

