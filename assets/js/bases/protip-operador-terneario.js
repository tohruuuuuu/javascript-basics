




// const elMayor = (a,b) => {
//     return ( a > b ) ? a : b;
// }

//FUNCION DE FLECHA SI TIENE SOLO UN RETURN SE PUEDE SIMPLIFICAR
const elMayor = (a,b) => ( a > b ) ? a : b;


const tieneMembresia = ( miembro ) => ( miembro ) ? '2 usd' : ' 10 usd';

console.log( elMayor( 10, 15 ));
console.log( tieneMembresia(false));


const amigo = !true;
const amigosArr = [
    'peter', 
    'luis fonsi', 
    'mateo',
    amigo ? 'thor' : 'lokii',
    //(()=> 'nick fury')()  esto es una anonima autoinvocada
    elMayor(10,15)
];

console.log( amigosArr);



const nota = 100; // A+ A B+ 
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({nota, grado});












