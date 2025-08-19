/*
 Archivo html: main.html
  - Debe contener una estructura html básica
  - debe cargar el archivo main.js usando el atributo type="module"

 Módulo principal: main.js
    - Debe importar las funciones nombradas de cart.js
    - Debe ejecutar la función importada para obtener el subtotal, el impuesto y el total
    - Debe imprimir en la consola un resumen claro y formateado del
     subtotal, el impuesto y el total a pagar

 Módulo de lógica de negocio: cart.js
    - Debe importa el array productList desde products.js
    - Debe definir una constante para el impuesto del 16% (TAX_RATE)
    - Debe contener la lógica para sumar los precios de todos los productos
    - Debe exportar usando la exportación nombrada que:
       - Calcule el subtotal(La suma de todos los precios)
       - Calcule el impuesto sobre el subtotal 

Módulo de datos: products.js
    - Debe contener un único array de lista de precios.
    - Debe contener al menos 5 precios
    - Debe exportar el array usando export default
*/