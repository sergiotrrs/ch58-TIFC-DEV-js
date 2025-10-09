
/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/
saludar(); // Hola

//..... Mucho código

function saludar() {
    console.log("Hola");
}

/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

const despedir = function seeYourLater() {
    console.log("Adiós");
};

despedir(); // Adiós

let isMerryChrsistmas = false;
let sayMerryChristmas;

if (isMerryChrsistmas) {
    sayMerryChristmas = function () {
        console.log("Feliz Navidad");
    };
} else {
    sayMerryChristmas = function () {
        console.log("Feliz día");
    };
}
sayMerryChristmas(); // feliz Navidad

// =====================================================
/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una sola instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/
// Realizar una función declarada y expresa que calcule al área de un triángulo
// al función debe retornar el resultado.
// Área = (base * altura) / 2

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
const areaTrianguloExpresado = function (base, altura) {
  return (base * altura) / 2;
};

const areaTrianguloFlecha = (base, altura) => (base * altura) / 2;

const areaTrianguloFlecha2 = (base, altura) => {
  return  (base * altura) / 2;
}

console.log( areaTriangulo(10, 5) ); // 25
console.log( areaTrianguloExpresado(10, 5) ); // 25
console.log( areaTrianguloFlecha(10, 5) ); // 25

/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/
const saludarPersona = (nombre) => console.log(`Hola ${nombre}`);

saludarPersona(); // Hola undefined 
saludarPersona("Ana"); // Hola Ana

const saludarPersonaConDefault = (nombre = "Visitante") => console.log(`Hola ${nombre}`);

saludarPersonaConDefault(); // Hola Visitante
saludarPersonaConDefault("Ana"); // Hola Ana


/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

const imprimirMensaje = ( message, fncCallBack ) => fncCallBack("Hola, " + message);
                                               //   20("Hola, Jueves de chismecito")
                                               //  0X3D4A2B("Hola, Jueves de chismecito")
                                               // console.log("Hola, Jueves de chismecito")
                                               // impimirEnH1("Hola, Saludos a todos")

// imprimirMensaje("Jueves de chismecito", 20 ); // fncCallBack is not a function
imprimirMensaje("Jueves de chismecito", console.log ); 
// imprimirMensaje("Falta mi canción", alert );

const imprimirEnH1 = ( message ) => document.getElementById("title").innerText = message;
/*
imprimirMensaje("Saludos a todos", imprimirEnH1 );

imprimirMensaje("Haz cara de sorpresa =O ", (message)=>{
    console.log("====" + message + "====");
    alert("====" + message + "====");
    document.getElementById("title").innerText = "====" + message + "====";

} );
 */

// Uso del método sort de los arreglos
const frutas = ["Banana", "Manzana", "Pera", "Mango", "Cereza"];

console.log(frutas); // [ 'Banana', 'Manzana', 'Pera', 'Mango', 'Cereza' ]
frutas.sort(); // Ordena por orden alfabético

console.log(frutas); // [ 'Banana', 'Cereza', 'Manzana', 'Mango', 'Pera' ]


// ============= ordenar números ================
// Funciones de orden superior?

const ordenarAcendente = ( a , b) => {
    if ( a < b ) return -1; // a va antes que b
    if( a > b ) return 1; // b va antes que a
    return 0; // son iguales
}

const ordenarAscendenteSimplificado = ( a, b ) => a - b;

const numeros = [1, 5, 3, 8, 2, 10, 4, 7, 6];
console.log(numeros); // [ 1, 5, 3, 8, 2, 10, 4, 7, 6 ]

numeros.sort(); // Ordena por orden alfabético
console.log(numeros); // [ 1, 10, 2, 3, 4, 5, 6, 7, 8 ]

// numeros.sort( ordenarAcendente );
numeros.sort( ordenarAscendenteSimplificado );
console.log(numeros); // [ 1, 2, 3, 4, 5, 6, 7, 8, 10 ]

/*
  Realizar un arrow funtion que sirva como callback para ordenar
  de forma descendente el arreglo de números.
  El resultado debe ser: [ 10, 8, 7, 6, 5, 4, 3, 2, 1 ]

*/
