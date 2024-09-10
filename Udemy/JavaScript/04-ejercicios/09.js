let pairs = [
    [1,{name:'nicolas'}],
    [2,{name:'felipe'}],
    [3,{name:'chanchito'}],
];

function toCollection(arr) {
    array=[];
    for (i in arr){
        let elemento = arr[i]
        array[i]=elemento[1];
        array[i].id=elemento[0]
    }
    return array;
}
let resultado = toCollection(pairs);
console.log(resultado);