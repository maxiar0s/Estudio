/**
 * crear algoritmo que devuelva
 * el precio del producto
 * mas impuesto */
function precioCompleto(precio, impuesto){
    
    return precio*impuesto+precio; 
}
let resultado=precioCompleto(19.90, 0.15);
console.log(resultado);