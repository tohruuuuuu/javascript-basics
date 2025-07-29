/**
 * dias de semana abrimos a las 11
 * pero los fines de semana abrimos a las 9
 */

// entra a un sitio web, para consultar si esta abierto hoy....
    const dia = 1; // 0: domingo
const horaActual = 10;

let horaApertura;
let mensaje; //abierto, cerrado

// if( dia === 0 || dia === 6) {
// if ( [0,6].includes(dia) ) 
//     console.log('fin de semana')
//     horaApertura = 9;
// } else {
//     console.log('dia de la semana');
//     horaApertura = 11;
// }
horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;


// if (horaActual >= horaApertura) {
//     mensaje = 'esta abierto'; 
// } else {
//     mensaje = `esta cerrado, hoy abrimos a las ${horaApertura} ` ;
// }

horaApertura = ( horaActual >= horaApertura ) ? 'esta abierto' : `esta cerrado, hoy abrimos a las ${horaApertura}`; 

console.log({horaApertura, mensaje});

