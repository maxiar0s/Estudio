function getByIdx(arr, idx){
    if(idx>=0 && idx<arr.length){
        return arr[idx];
    }
    else{
        return 'invalido';
    }
}
let resultado = getByIdx([1,2], 1);
console.log (resultado);