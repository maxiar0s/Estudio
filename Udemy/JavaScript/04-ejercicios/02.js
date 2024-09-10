/**
 * Nombre: ancho x alto
 * 8k 7680 x 4320
 * 4k 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 */
function nombreResolucion(ancho, alto) {
    if (ancho>=1280 && alto>=720 ){
        if(ancho>=1920 && alto>=1080){
            if(ancho>=2560 && alto>=1440){
                if(ancho>=3840 && alto>=2160){
                    if(ancho>=7680 && alto>=4320){
                        return '8k';
                    }
                    return '4k';
                }
                return 'wqhd';
            }
            return 'fhd';
        }
        return 'hd'; 
    }
    else{
        return 'No es hd';
    }
}
let nombre = nombreResolucion(1000, 2000)
console.log(nombre);
