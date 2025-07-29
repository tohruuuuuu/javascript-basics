function saludar() {
    console.log('hola mundo');
    return 1;

    console.log('esto es codigo despues de un return')// esto nunca se va a ejecurar
}


const saludar2 = function(nombre ) {
console.log('hola ' + nombre);
}// esto es una funcion anonima
//sirve para q no se pueda usar el nombre de la variable 
// dos veces




const saludarFlecha = () => {
    console.log('hola ');
}

const saludarFlecha2 = (nombreFlecha) => {
    console.log('hola ' + nombreFlecha);
}


const retornoSaludar = saludar;
console.log(retornoSaludar)


saludar();
saludar2('sebastian');
saludarFlecha();
saludarFlecha2("flechaVeloz");


function sumar( a, b ) {
    return a + b;
}

const sumar2 = (a,b) => a + b;// funciona igual al de arriba


function getAleatorio() {
    return Math.random();
}


const getAleatorio2 = () => Math.random();

console.log( sumar(2,3));
console.log( sumar2(2,3));
console.log( getAleatorio());
console.log( getAleatorio2());