function suma(a) {
    return a+3;
}

let resultado = suma(5);
console.log(resultado);

function multi(a, b) {
    return a*b;
};

let resultado2 = multi(5, 6);
console.log(resultado2);

console.log(typeof multi);

function resta(a, b) {
    console.log(arguments)
    return a-b;
};

let resultado3 = resta(5, 6, 3, 4, 2, 1);
console.log(resultado2);
