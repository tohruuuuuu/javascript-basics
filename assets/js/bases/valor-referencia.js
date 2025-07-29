


let a = 10;
let b = a 
a = 30 ;

console.log({a, b});// print a = 30  y b=10

let juan = {nombre: 'juan'};
let ana = juan;

console.log({juan, ana});

const cambiaNombre = (persona) => {
    persona.nombre = 'tony';
    return persona;
}

let peter = {nombre:'peter' };


// arreglos
const frutas = ['manzana', 'pera', 'mango'];

console.time('slice')
const otrasFrutas = frutas.slice;
console.timeEnd('slice')

console.time('spread')
const otrasFrutas2 = [...frutas];
console.timeEnd('spread')

otrasFrutas.push('sandia');

console.log({frutas, otrasFrutas});

//spread tiende a ser mas rapido 