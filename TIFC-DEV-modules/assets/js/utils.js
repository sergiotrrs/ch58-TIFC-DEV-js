/*
 Encapsulamiento 📦: Cada archivo es su propio módulo. Las variables, funciones o clases 
 declaradas en un archivo son privadas por defecto. No contaminan el scope global.

 Exportar (Exponer) 📤: Usas la palabra clave export para hacer que una función, 
 variable o clase sea visible y utilizable por otros módulos. Hay dos tipos 
 principales de exportación:

  - Nombrada (Named Export): Permite exportar múltiples valores desde un módulo.
  - Por Defecto (Default Export): Permite exportar un único valor como el "principal" 
    del módulo. Solo puede haber uno por archivo.

*/
// import pages from "../pages/pages.js"; // importación usando ruta relativa
import pages from "/assets/pages/pages.js"; // importación usando ruta absoluta desde la raíz del proyecto

console.log("Páginas disponibles:", pages);

const API_URL = "https://api.example.com/data";

function calculateIVA (amount) {
    return amount * 0.16;
}

function formatPrice(price) {
    return `$${price.toFixed(2)} MNX`;
}

// exportación nombrada
export { calculateIVA, API_URL };
// exportación por defecto
export default formatPrice;