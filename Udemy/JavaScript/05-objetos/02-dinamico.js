const user = {id:1}; // podemos modificar todas sus propiedades
user.name='nicolas';
user.guardar=function(){
    console.log('guardando '+user.name);
}
user.name='juan';
delete user.name;
user.guardar();

const user1 = Object.freeze({id:1});//no podemos modificar nada
user1.name='maximiliano';
console.log(user1)

const user2 = Object.seal({id:1});//podemos modificar pero no añadir propiedades
user2.name='maximiliano';
user2.id=2;
console.log(user2);


