

// const crearArchivo = ( base = 5) => {

//     console.log('===============================');
//     console.log(`       Tabla del: ${base}      `);
//     console.log('===============================');
    
//     return new Promise(( resolve, reject ) => {

//         let salida = '';
//         for( let i = 1; i <= 10; i++ ){
//             salida += `${ base } X ${ i } = ${base * i}\n`
//         }

//         fs.writeFileSync( `tabla-${base}.txt`, salida);

//         ( salida ) 
//         ? resolve( `tabla-${base}.txt` )
//         : reject( `Error al crearlo.` );

//     })
// };
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, limite=10 ) => {

    try {

        let salida, consola = '';

        for( let i = 1; i <= limite; i++ ){
             salida += `${ base } X ${ i } = ${base * i}\n`;
             consola += `${ base } ${'X'.green} ${ i } ${'='.green} ${base * i}\n`;
        }

        if (listar) {
            console.log('==============================='.green);
            console.log(`       Tabla del:`.green,colors.blue(base));
            console.log('==============================='.green);

            console.log(consola);            
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (error) {

        throw error;

    }

};


module.exports = { 
    crearArchivo

}


