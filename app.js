//Transformar objetos a arrays

const dataLina = {
    name: 'Lina Maria',
    firstName: 'Guerrero Lopez',
    age: 22,
    contac: 'perfilgitlinamaria@gmail.com'
}

//Object.keys --> Nos devuelve un array con las claves del objeto.
let object1 = Object.keys(dataLina);
console.log(object1);

//Object.values --> Nos devuelve un array con los balores del objeto.
let object2 = Object.values(dataLina);
console.log(object2);

//Object.entries --> Nos devuelve un array donde cada elemento es un array con dos posiciones (clave, valor).
let object3 = Object.entries(dataLina);
console.log(object3);