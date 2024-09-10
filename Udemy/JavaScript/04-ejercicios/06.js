 /**
  * crear un algoritmo que devuelv cantidad
  * de numeros positivos de un array
  */
 let array = [2, 5, 7, 15, -5, -100, 55];
 function cuantosPositivos(arr){
    let cuantos=0;
    for(i of arr){
        if(i > 0){
            cuantos++
        }
    }
    return 'La cantidad de positivos es '+cuantos;
 }
 let resultado = cuantosPositivos(array);
 console.log(resultado);