// OBJETOS
// 1. crea un objeto que contenga las llaves (nombre) y (apellido).
// y valores 'Brandon' y 'Eich' respectivamente y asígnalo a una variable llamada (fundador).
var fundador = {
    nombre: 'Brandon',
    apellido: 'Eich',
}

console.log(fundador)
// 2. agrega una llave adicional al objeto fundador llamada (info) cuyo valor sea la variable (information).
var information = ['Netscape', 'Livescript', 'ECMA'];

fundador.information = information
console.log(fundador)
// 3. Encuentra la tercera posición del arreglo contenido en la llave (info) del objeto (fundador).
// imprímelo en consola.
console.log(fundador.information[2])
console.log(Object.getOwnPropertyNames(fundador))

// 4. Modifica el valor de la llave (nombre) del objeto cambiando "Brandon" por "Brendan".
// Imprime el objeto final en consola

fundador.nombre = 'Brendon'
console.log(fundador.nombre)


// ***** Para correr este archivo en la consola de node ejecuta el siguiente comando:
// ***** node ./ejercicios/data-types/objetos.js