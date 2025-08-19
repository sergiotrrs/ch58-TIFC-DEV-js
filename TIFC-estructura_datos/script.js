console.log("Hola por Ch58");

// Comentario de línea
/*
  Comentario de bloque
*/

/**
 * Formas de declarar un arreglo en JavaScript
 * - Usando corchetes []
 * - Usando el constructor Array()
 */
function declararUnArreglo() {
    const myArray = []; // empty array
    const myArray2 = new Array(); // empty array usando el constructor

    const myArray3 = [5]; // array con un elemento [5]
    const myArray4 = new Array(5); // array con 5 elementos undefined
                  // [ undefined, undefined, undefined, undefined, undefined ]

    console.log("myArray3: ", myArray3);
    console.log("myArray4: ", myArray4);

    const myArray5 = [23,44,56]; // Array con 3 elementos
    const myArray6 = new Array(23,44,56); // Array con 3 elementos usando el constructor
    
    console.log("myArray5: ", myArray5); // [23, 44, 56]
    console.log("myArray6: ", myArray6); // [23, 44, 56]
}

// declararUnArreglo();

/**
 * Acceso a los elementos de un arreglo
 * - Usando el índice del elemento
 * 
 */
function accesoAElemento( indice, numeros ) {
    return numeros[indice];
}

console.log("Indice 1: ", accesoAElemento( 1, [14,23,36] ) ); //  23

/*
 Usando la llamada a la función accesoAElemento
  - Acceder al índice 3 del arreglo [14,23,36,45,56]
*/
console.log("Indice 3:" , accesoAElemento( 3, [14,23,36,45,56] )); //45

/**
 * Acceder a un elemento del arreglo usando el méto at()
 */
function accesoAElementoUsandoAt( indice, numeros ) {
    return numeros.at(indice);
}

const numerosDePrueba = [14,23,36,45,56,100,23,58,99];
console.log("Obtener el número 56");
console.log("Valor de 56: ", accesoAElementoUsandoAt(-5, numerosDePrueba)); 
console.log("Valor de 56: ", accesoAElementoUsandoAt(4, numerosDePrueba)); 

/**
 * Obtener la longitud de un arreglo
 * - Usando la propiedad length
 */
function longitudDelArreglo( arreglo) {
    // Las propiedades NO se invocan con paréntesis
    return arreglo.length;
}

console.log("Longitud: ", longitudDelArreglo([14,23,36,45,56])); // 5
console.log("Longitud: ", longitudDelArreglo([14,23])); // 2
console.log("Longitud: ", longitudDelArreglo([])); // 0

/**
 * Agregar un elemento al final de un arreglo
 * - Usando el método push()
 * - Este método modifica el arreglo original
 * 
 */
function agregarElementoAlFinal( arreglo, elemento ) {
  // arreglo[ arreglo.length  ] = elemento; 
  arreglo.push( elemento ); // Agrega el elemento al final del arreglo
  return arreglo;
}

const frutas = [];
// Agregar al final del arreglo algunas frutas
console.log( agregarElementoAlFinal(frutas, "Manzana") );
console.log( agregarElementoAlFinal(frutas, "Mango Ataulfo") );
console.log( agregarElementoAlFinal(frutas, "Plátano") );

/*
 Pase de datos por valor y por referencia
 - Los tipos primitivos se pasan por valor
 - Los tipos de referencia (objetos, arreglos, funciones) se pasan por referencia
*/

function pasePorValor( numero ) {
    numero = 100; // Cambia el valor de la variable local
    return numero;
}   
const numeroOriginal = 50;
console.log("Pase por valor: ", pasePorValor(numeroOriginal)); // 100
console.log("Número original: ", numeroOriginal); // 50

function pasePorReferencia( arreglo ) {
    arreglo[ arreglo.length ] = 100; 
    return arreglo;
}
const arregloOriginal = [1, 2, 3];
console.log("Pase por referencia: ", pasePorReferencia(arregloOriginal)); // [1, 2, 3, 100]
console.log("Arreglo original: ", arregloOriginal); // [1, 2, 3, 100]

/**
 * Recorre un arreglo e imprime sus valores
 */
function recorrerArreglo( arreglo ) {
    for (let index = 0; index < arreglo.length; index++) {
        console.log(`Elemento en el índice ${index}: ${arreglo[index]}`);
    }
}
recorrerArreglo([1, 2, 3, 4, 5]);

function recorrerArregloConForOf( arreglo ) {
    for (const elemento of arreglo) {
        console.log(`Elemento: ${elemento}`);
    }
}
recorrerArregloConForOf([1, 2, 3, 4, 5]);