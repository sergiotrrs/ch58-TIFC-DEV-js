/*
Partiendo de este arreglo:

const lista = ["Ana", "Luis", "Pedro"];

Realiza las siguientes operaciones en este orden:
1.- Agrega "Sofía" y "Carlos" al final.
2.- Elimina el primer elemento y guárdalo en la variable primeroEliminado.
3.- Agrega "María" al inicio.
4.- Elimina el último elemento y guárdalo en la variable ultimoEliminado.

Al final, debes mostrar en consola:
El valor de primeroEliminado
El valor de ultimoEliminado
El arreglo final lista

*/
console.log("Ejercico de arreglos");
const lista = ["Ana", "Luis", "Pedro"];
lista.push("Sofía", "Carlos") // paso 1
console.log( lista ); // Agrega "Sofía" y "Carlos" al final
const primeroEliminado = lista.shift(); // paso 2: Elimina el primer elemento "Ana"
console.log( lista ); // Arreglo después de eliminar el primer elemento
lista.unshift("María"); // paso 3: Agrega "María" al inicio
console.log( lista ); // Arreglo después de agregar "María"
const ultimoEliminado = lista.pop(); // paso 4: Elimina el último elemento "Carlos"
console.log( lista ); // Arreglo después de eliminar el último elemento
