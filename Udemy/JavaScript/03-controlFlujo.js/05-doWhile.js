let numero = 2;
do{
    if (numero % 2 == 0){
        console.log(numero+' es par')
    }
    else{
        console.log(numero+' no es par')
    }
    numero++;
} while (numero <= 2);

console.log('fuera del while')