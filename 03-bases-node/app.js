
const { argv } = require('./config/yargs');

const colors = require('colors/safe');

const { multiply, showTable } = require('./multiply/multiply');

let command = argv._[ 0 ];

switch( command ){
    case 'listar':
        console.log('Listar');
        showTable( argv.base, argv.limit );
    break;
    case 'crear':
        console.log('crear');
        multiply( argv.base, argv.limit )
        .then( file => console.log( `File created: ${ colors.cyan( file )}`))
        .catch( err => console.log( err ));
    break;
    default:
        console.log('Comando no reconocido');
}

// console.log( argv );
// let 
// argv2 = process.argv
// params = argv[ 2 ],
// argv2
// base = params.split('=')[ 1 ];


// console.log( 'Limite', argv.limit );