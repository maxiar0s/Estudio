// and, or , not
// and = &&
// or = ||
// not = !

console.log(true && true); // true
console.log(false && true); // false

let mayor = false;
let suscrito = true;

console.log('operador and', mayor && suscrito); //false
console.log('operador or', mayor || suscrito);  //true
console.log('operador or', !mayor);             //true
let catalogoInfantil = !mayor;

