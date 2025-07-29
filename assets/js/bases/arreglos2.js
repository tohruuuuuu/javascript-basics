let juegos = ['zelda', 'mario', 'metroid', 'chrono']
console.log('largo',  juegos.length)

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1 ];

console.log(primero);
console.log(ultimo);

juegos.forEach(( Element, index, arr )  => {
    console.log({Element, index, arr});
});

let nuevaLongitud = juegos.push('f-zero'); 
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('fire emblem');
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

let pos = 1;

let juegosBorrado = juegos.splice(pos, 2);
console.log({ juegosBorrado, juegos});

let metroidIndex = juegos.indexOf('metroid');//key sensitive
console.log({metroidIndex})





