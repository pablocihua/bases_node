
const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
},
argv = require('yargs')
.command(
    'listar',
    'Imprime en consola la tabla de multiplicar',
    options
)
.command(
    'crear',
    'Genera un archivo .txt de la tabla de multiplicar de base a limite.',
    options
)
.help()
.argv;

module.exports = {
    argv
};