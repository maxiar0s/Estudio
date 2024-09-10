/**
 * crear algoritmo que tome un array de objetos
 * y devuelva un array de pares
 */
let array = [{
    id:1,
    name:'nicolas',
},  {
    id:2,
    name:'felipe',
},  {
    id:3,
    name:'chanchito',
}];

function toPairs(arr){
    arrPares=[];
    i=0
    while(i<arr.length){
        let elemento = arr[i];
        arrPares[i]=[elemento.id, elemento];
        i++;
    }
    return arrPares;
}

let resultado = toPairs(array);
console.log(resultado);