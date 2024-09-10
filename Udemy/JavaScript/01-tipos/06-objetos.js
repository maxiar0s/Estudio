// personaje de tv
let nombre = 'tanjiro';
let anime = 'kimetsu no yaiba';
let edad = 16;

let personaje = {
    nombre: 'tanjiro',
    anime: 'kimetsu no yaiba',
    edad: 16,
};

console.log(personaje);
console.log(personaje.anime);
console.log(personaje[nombre]);

personaje.edad = 14;

personaje['edad'] = 15;

let llave = 'nombre';
personaje[llave] = 'sukuna';

delete personaje.anime;