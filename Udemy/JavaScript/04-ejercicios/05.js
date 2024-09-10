/**
 * Crear algoritmo que devuelva número
 * menor y mayor de un array.
 */
let array = [2,5,7,15,-5,-100,55];
function getMenorMayor(arr){
    let mayor=arr[0];
    let menor=arr[0];
    let i=0;
    while(i<arr.length){
        if(arr[i]>mayor){
            mayor=arr[i]
        }
        if(arr[i]<menor){
            menor=arr[i]
        }
        i++;
    }
    return 'numero mayor es '+mayor+' y el menor es '+menor;
}
let numeros = getMenorMayor(array)
console.log(numeros);

let array2 = [2,5,7,15,-5,-100,55];
function getMenorMayor2(arr){
    let mayor2 = arr[0]
    let menor2 = arr[0]
    let i=0;
    for (y of arr) {
        mayor2=mayor2>y ? mayor2 : y;
        menor2=menor2<y ? menor2 : y;
    }
    return [menor2,mayor2];
}
let numeros2 = getMenorMayor2(array2)
console.log(numeros2);