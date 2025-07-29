

let a = 5;


if ( a > 10 ) {// undefined, null, asignaciones
    console.log('a es mayor a 10');
} else {
    console.log( 'a es menor a 10');
}


// console.log('fin del programa');

// const hoy = new Date();
// let dia = hoy.getDay();// 0: domingo, 1: lunes, 2: martes etc

//console.log({dia});

// if ( dia === 0 ) {
//     console.log( 'hoy es domingo');
// } else {
//     console.log('NO ES DOMINGOOO');
// }

 //sin usar if, else, switch, sonly objetcs or arrays 

 dia = 3;
 
 const diaLetras = {
     0: 'Domingo', 
     1: 'lunes', 
     2: 'martes', 
     3: 'miercoles', 
     4: 'jueves', 
     5: 'viernes', 
     6: 'sabado'
    };
    
    
console.log( diaLetras[dia] || 'dia no definido' ); 
