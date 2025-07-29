
const carros = [
    'ford', 
    'mazda', 
    'honda', 
    'toyota', ]

let i = 0
// while( i < carros.length ) {
//     console.log(carros[i]);
//     // i = i + 1;
//     i++;
// }
console.warn('while')
//undefined, null y false son cond falsas y hace  q los ciclos no funcionen

while ( carros[i]) {
    if ( i === 1 ) {
        //break
        i++;
        continue;
    }

    console.log( carros[i] );
    i++
}


console.warn('do while')

let j = 0;
do {
console.log( carros[j] );
j++;

}while( carros[j] );

