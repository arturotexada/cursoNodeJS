const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    listar: {
        alias: 'l',
        default: true
        
    },  
    hasta: {
        alias: 'h',
        default: 10
        
    }  
    
} 

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .command('hasta', 'Genera/Imprime la tabla de multiplicar HASTA un límite dado', opts)
    .help()
    .argv;

// module.exports = {
//     argv
// }
module.exports = argv;