console.log("Alcance de bloque en JavaScript");

/*
 Variables definidas dentro de un bloque no son accesibles fuera de él.
 Esto solo es cierto para variables declaradas con let y const
 
 Esto previene que las variables se filtren fuera de su contexto inmediato, 
 como un bucle for, una sentencia if, o simplemente un par de llaves.
 */

{
    let x = 10;
    const y = 20;
    var z = 30; // var tiene un alcance de función, no de bloque
    console.log("Dentro del bloque: x =", x, ", y =", y, ", z =", z); // 10, 20, 30
}

console.log("Fuera del bloque: z =", z); // 30
// console.log("Fuera del bloque: x =", x); // Uncaught ReferenceError: x is not defined
// console.log("Fuera del bloque: y =", y); // Uncaught ReferenceError: y is not defined

/*
    Alcance de bloque en un bucle for
*/
for (let i = 0; i < 3; i++) {
    var j = 100; // var tiene un alcance de función, no de bloque
    const k = 200; // const tiene un alcance de bloque
    console.log("Dentro del bucle for: i =", i, ", j =", j, ", k =", k); // 0, 1, 2   - 100, 200
}

// console.log("Fuera del bucle for: i =", i); // Uncaught ReferenceError: i is not defined 
console.log("Fuera del bucle for: j =", j); // 100

// ==========================================================
/*
 Reasignación y redeclaración de variables
 Variables declaradas con let y const no pueden ser redeclaradas en el mismo bloque.
 Variables declaradas con var pueden ser redeclaradas en el mismo bloque, pero no es recomendable.
 Variables declaradas con let pueden ser reasignadas, pero no redeclaradas en el mismo bloque.
 Variables declaradas con const no pueden ser reasignadas ni redeclaradas en el mismo bloque.
 Variables declaradas con var pueden ser reasignadas y redeclaradas en el mismo bloque.
*/
{
let a; // declaració de la variable a
a = 5; // asignación de valor a la variable a
a = 15; // reasignación de valor a la variable a
// let a; //Identifier 'a' has already been declared
const b = 10;
// b = 20; // Uncaught TypeError: Assignment to constant variable.
// const b = 20; //Uncaught SyntaxError: Identifier 'b' has already been declared
var c = 30;
var c = 40; // var puede ser redeclarada
console.log("Dentro del bloque: a =", a, ", b =", b, ", c =", c); // 15, 10, 40
    /*
     Bloque de código anidado
     Las variables declaradas con let y const en un bloque anidado no afectan a las
        variables del bloque externo, incluso si tienen el mismo nombre. 
    */
    {
        let a = 50;
        const b = 60;
        var c = 70;
        console.log("Dentro del bloque anidado: a =", a, ", b =", b, ", c =", c); // 50, 60, 70

    }

    console.log("Fuera del bloque anidado: a =", a, ", b =", b, ", c =", c);
}

/*
 Ejemplo de bloque anidado con for

*/
for (let i = 0; i < 3; i++) {
    let a = 100 + i; // let tiene un alcance de bloque
    const b = 200 + i; // const tiene un alcance de bloque
    var c = 300 + i; // var tiene un alcance de función

    console.log("Dentro del bucle for: i =", i, ", a =", a, ", b =", b, ", c =", c); // 100, 200, 300
    for (let j = 0; j < 2; j++) {
        let a = 400 + j; // let tiene un alcance de bloque
        const b = 500 + j; // const tiene un alcance de bloque
        var c = 600 + j; // var tiene un alcance de función
        {
            let a = 700 + j; // let tiene un alcance de bloque
        }

        console.log("Dentro del bucle anidado: j =", j, ", a =", a, ", b =", b, ", c =", c); // 400, 500, 600
    }
}


{     
     { 
        let a = 2;
        var b = 3;
        var c = a + b;
     }
     // var c = a  + b ; // Uncaught ReferenceError: a is not defined
}

/*
 Acance de las variables en funciones
 Variables declaradas con var, let y const en una función no son accesibles fuera de ella.
*/

function myFunction() {
    let varX = 10;
    const varY = 20;
    var varZ = 30; // var tiene un alcance de función, no de bloque
    console.log("Dentro de la función: x =", varX, ", y =", varY, ", z =", varZ); // 10, 20, 30
}

myFunction();
// console.log("Dentro de la función: x =", varX); // Uncaught ReferenceError: varX is not defined
// console.log("Dentro de la función: y =", varY); // Uncaught ReferenceError: y is not defined
// console.log("Dentro de la función: z =", varZ); // Uncaught ReferenceError: z is not defined

 
/*
 Contaminación del espacio de nombres global
 Variables globales declaradas con var se agregan al objeto global (window en navegadores).
    Variables globales declaradas con let y const no se agregan al objeto global.
    Esto ayuda a evitar la contaminación del espacio de nombres global.

*/

var globalVar = "Soy una variable global con var";
let globalLet = "Soy una variable global con let";
const globalConst = "Soy una variable global con const";