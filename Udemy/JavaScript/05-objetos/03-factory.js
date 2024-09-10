
/*let user1 = {
    correo:'fra.ahumadag@duocuc.cl',
    nombre:'francisca',
    activo:false,
    recuperarClave: function(){// funcion anonima
        console.log('recuperando clave');
    },
}*/
function crearUsuario(correo, nombre){
    return {
        correo,//correo:correo
        nombre,//nombre:nombre
        activo:true,
        recuperarClave: function(){// (funcion anonima) METODOS
            console.log('recuperando clave');
        },
    }
}
let user = crearUsuario('max.aros@duocuc.cl', 'maximiliano');
let user1 = crearUsuario('fra.ahumadag@gmail.com', 'francisca');
console.log(user,user1);