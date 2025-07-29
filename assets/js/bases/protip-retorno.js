
// function crearPersona (nombre, apellido ) {
//     return {
//         nombre: nombre,
//         apellido: apellido,
//     }
// }

const crearPersona = (nombre, apellido) => (nombre,apellido);

console.log(crearPersona('sebastian', 'gonzalez'));

function imprimeArgumentos() {
    console.log(arguments);
}

imprimeArgumentos(10, true, false, 'sebastian', 'hola');

//la funcion de flecha no crea argumentos como el de arriba
