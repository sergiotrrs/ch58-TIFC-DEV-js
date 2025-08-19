
/*
 Importar (Consumir) 📥: Usas la palabra clave import para acceder a las 
 funcionalidades que otro módulo ha exportado.

*/
import { calculateIVA, API_URL } from "./assets/js/utils.js";
import formatPrice from "./assets/js/utils.js";
/*
 Se puede renombrar al importar usando la sintaxis `as`:
 import { calculateIVA as calcularIVA } from "./assets/js/utils.js";
 import formato from "./assets/js/utils.js";
*/


console.log("Este es un módulo de JavaScript");
const productPrice = 100;
const iva = calculateIVA(productPrice);
console.log("El IVA del producto es:", iva);
console.log("El IVA formateado es:", formatPrice(iva));

console.log("La URL de la API es:", API_URL);


