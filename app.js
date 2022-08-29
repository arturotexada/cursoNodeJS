// const argv = require('./config/yargs').argv;
// const colors = require('colors/safe');

// const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// let comando = argv._[0];

// switch (comando) {

//     case 'listar':
//         listarTabla(argv.base, argv.limite);
//         break;

//     case 'crear':
//         crearArchivo(argv.base, argv.limite)
//             .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
//             .catch(e => console.log(e));
//         break;

//     default:
//         console.log('Comando no reconocido');

// }

// console.log(argv.base);

// let parametro = argv[2];
// let base = parametro.split('=')[1]

///////////////////////////////////////////

// const fs = require('fs');

// console.clear();
// console.log("========================");
// console.log("===== Tabla del 5 ===== ");
// console.log("========================");

// const base = 9;
// let salida = '';

// for (var i = 1; i <= 10; i++) {
//   salida += (` ${base} x ${i} = ${base * i}\n`);
// }

// // console.log(salida)
// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//     if (err) throw err; 
//     console.log(`tabla-${base}.txt Created successfully`)   
// })

///////////////////////////////////////////

const { crearArchivo } = require('./multiplicar/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');


console.clear();

 //const base = 2;

 crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch( err => console.log(err) );