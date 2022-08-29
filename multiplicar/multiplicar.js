// const fs = require('fs');

// const crearArchivo = (base = 5) => {

//     console.log("========================");
//     console.log('===== Tabla del: ', base );
//     console.log("========================");
    
//     let salida = '';

//     for (var i = 1; i <= 10; i++) {
//         salida += (` ${base} x ${i} = ${base * i}\n`);
//     }

//     console.log(salida);

//     fs.writeFileSync(`tabla-${base}.txt`, salida);
    
//     console.log(`tabla-${base}.txt Created successfully`);
// }

// module.exports = {
//     crearArchivo,
// }

////////////////////////////////////////////////////////////////////////////////
// const fs = require('fs');

// const crearArchivo = (base = 5) => {

//     return new Promise((resolve, reject) => {

    
//         console.log("========================");
//         console.log('===== Tabla del: ', base );
//         console.log("========================");
        
//         let salida = '';

//         for (var i = 1; i <= 10; i++) {
//             salida += (` ${base} x ${i} = ${base * i}\n`);
//         }

//         console.log(salida);

//         fs.writeFileSync(`tabla-${base}.txt`, salida);
        
//         resolve(`tabla-${base}.txt Created successfully`);
//     })
// }

// module.exports = {
//     crearArchivo,
// }
////////////////////////////////////////////////////////////////////////////////
// const fs = require('fs');

// const crearArchivo = async(base = 5) => {

//     console.log("========================");
//     console.log('===== Tabla del: ', base );
//     console.log("========================");
    
//     let salida = '';

//     for (var i = 1; i <= 10; i++) {
//         salida += (` ${base} x ${i} = ${base * i}\n`);
//     }

//     console.log(salida);

//     fs.writeFileSync(`tabla-${base}.txt`, salida);
    
//     return(`tabla-${base}.txt Created successfully`);
// }

// module.exports = {
//     crearArchivo,
// }
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
const fs = require('fs');
const colors = require('colors');
const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {    

    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
        salida += (` ${ base }    x    ${i}    =     ${base * i}\n`);
        consola += (`${ base } ${'x'.green} ${i} ${'='.green} ${base * i}\n`);
    }

if (listar) {
    console.log("========================".green);
    console.log('====='.green + ' Tabla del: ', colors.yellow(base) + ' ===='.green);
    console.log("========================".green);

    console.log(consola);
}

    fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida);
    
    return(`--- tabla-del${base}.txt ---`);
    } catch (error) {
        throw error
    }
    
}

module.exports = {
    crearArchivo,
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


// const fs = require('fs');

// console.clear();


// const base = 9;
// let salida = '';


// // requireds
// const fs = require('fs');
// const colors = require('colors');

// let listarTabla = (base, limite = 10) => {

//     console.log('=================='.green);
//     console.log(`tabla de ${ base }`.green);
//     console.log('=================='.green);

//     for (let i = 1; i <= limite; i++) {
//         console.log(`${ base } * ${ i } = ${ base * i }`)
//     }

// }


// let crearArchivo = (base, limite = 10) => {

//     return new Promise((resolve, reject) => {

//         if (!Number(base)) {
//             reject(`El valor introducido ${ base } no es un número`);
//             return;
//         }

//         let data = '';

//         for (let i = 1; i <= limite; i++) {
//             data += `${ base } * ${ i } = ${ base * i }\n`;
//         }


//         fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {

//             if (err)
//                 reject(err)
//             else
//                 resolve(`tabla-${ base }-al-${ limite }.txt`);

//         });

//     });

// }

// module.exports = {
//     crearArchivo,
//     listarTabla
// }

