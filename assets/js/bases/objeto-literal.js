
const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.567,
        lng: -118.93
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, california'
    },

}; //llaves corchas significa objeto literal

console.log(personaje);
console.log('nombre', personaje.nombre);
console.log('nombre', personaje['nombre']);
console.log('edad', personaje.edad);
console.log('coors', personaje.coords);
console.log('lat', personaje.coords.lat);

console.log('num, trajes', personaje.trajes.length)
console.log('ultimo traje', personaje.trajes[personaje.trajes.length - 1])

const x = 'vivo';
console.log('vivo', personaje[x]);

//details

delete personaje.edad;
console.log(personaje);

personaje.casado = true

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

 Object.freeze (personaje);

 personaje.dinero = 10000000; // no sale por lo del .freeze, pero si 
 // se pueden cambiar las propiedades dentro del objeto
 console.log(personaje)