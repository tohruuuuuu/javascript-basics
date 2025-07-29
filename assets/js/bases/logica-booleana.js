
const regresaTrue = () => {
    console.log('regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('regresa False');
    return false;
}


console.warn('not o la negacion');
console.log(true);  //sale true

console.log( !regresaFalse() ); // true

console.warn( 'and' );// true si todos los valores son verdaderos
console.log( true && true );// true
console.log( true && !false );// true

console.log('======');
console.log( regresaFalse() && regresaTrue() );// NO LEE EL AND Y DA FALSE
console.log( regresaFalse() && regresaTrue() );// FALSE

console.log('===&&===');
regresaFalse() && regresaTrue();

console.warn('OR');// para q de true una debe ser true lit
console.log( true || false );
console.log( false || false );

console.log( regresaTrue() || regresaFalse() );// hay un true, regresa un true

console.warn('asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = false && 'hola mundo' && 156; // false y no lee los and

const a2 = 'hola' && 'mundo' && soyFalse && true; 
const a3 = soyFalse || 'ya no soy falso'; 
const a4 = soyFalse || soyUndefined || soyNull || 'ya no soy falso de nuevo' || true; // retorna el string poq despues de leer un valor, ya no lee mas 
const a5 = soyFalse || soyUndefined || regresaTrue || 'ya no soy falso de nuevo' || true; // retorna el regresaTrue poq despues de leer un valor, ya no lee mas 



console.log({a1, a2, a3, a4, a5});