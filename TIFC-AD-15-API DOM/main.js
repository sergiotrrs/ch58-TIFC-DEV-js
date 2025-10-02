/*
 Principales métodos y propiedades del DOM para manipular elementos en JavaScript:

Método / Propiedad	                Descripción	                                    Ejemplo
document.getElementById()	        Selecciona un elemento por su ID.	                                document.getElementById("titulo")
document.querySelector()	        Devuelve el primer elemento que coincide con un selector CSS.	    document.querySelector(".btn")
document.querySelectorAll()	        Devuelve todos los elementos que coinciden con un selector CSS.	    document.querySelectorAll("p")
element.innerHTML	                Obtiene o establece el contenido HTML interno.	                    div.innerHTML = "<b>Hola</b>"
element.textContent	                Obtiene o establece el texto interno.	                            div.textContent = "Texto plano"
element.setAttribute()	            Establece un atributo en el elemento.	                            img.setAttribute("src", "foto.jpg")
element.getAttribute()	            Obtiene el valor de un atributo.	                                img.getAttribute("src")
element.classList.add()	            Añade una clase CSS al elemento.	                                div.classList.add("activo")
element.classList.remove()	        Elimina una clase CSS del elemento.	                                div.classList.remove("oculto")
element.style	                    Permite modificar estilos en línea.	                                div.style.color = "red"
document.createElement()	        Crea un nuevo elemento HTML.	                                    const p = document.createElement("p")
parent.appendChild()	            Agrega un nodo hijo al final.	                                    div.appendChild(p)
element.remove()	                Elimina el elemento del DOM.	                                    boton.remove()
element.addEventListener()	        Asocia un evento al elemento.	                                    btn.addEventListener("click", fn)
element.removeEventListener()	    Elimina un evento asociado al elemento.	                            btn.removeEventListener("click", fn)
element.style.display	            Cambia la propiedad de visualización.	                            div.style.display = "none"
element.style.visibility	        Cambia la visibilidad del elemento.	                                div.style.visibility = "hidden"
element.style.cursor	            Cambia el cursor al pasar sobre el elemento.	                    div.style.cursor = "pointer"
*/

/**
 * Manipulando el H1 con JavaScript
 */
function changeTitle(newText) {
  // Obtenemos la referencia al elemento H1
  const mainHeader = document.getElementById("main-header");
  console.log(mainHeader);
  mainHeader.textContent = newText;
  mainHeader.style.color = "blue";
  // mainHeader.innerText = newText;
  // mainHeader.innerHTML = "<em>" + newText + "</em>";
}

changeTitle("Hola, ya casi nos vamos a comer, ñam ñam");

/**
 * Manipulando un párrafo usando el selector universal
 */
function changeParagraph() {
  // const paragraph = document.querySelector("p"); // seleccionado por su tag
  // const paragraph = document.querySelector("#description-text"); // seleccionado por su ID
  // const paragraph = document.querySelector(".text-center"); // seleccionar por su clase CSS
  // const paragraph = document.querySelector("p.text-center"); // seleccionar por su tag y clase CSS
  const paragraph = document.querySelector("#description-section p"); // seleccionar por su tag dentro de un ID
  console.log(paragraph);
  paragraph.textContent = "Párrafo modificado con querySelector";
  paragraph.style.color = "green";
  paragraph.style.fontWeight = "bold";
}

/**
 * Manipulando el estilo de una lista, usando quertySelectorAll
 */
function changeStyle() {
  const listItems = document.querySelectorAll("#language-list li");
  console.log(listItems);

  // for ( let i = 0; i < listItems.length; i++ ) {
  for (const item of listItems) {
    //const item = listItems[i];
    item.style.color = "purple";
    item.style.fontSize = "20px";
    item.style.fontWeight = "bold";
  }
}

/*
 * Creando un menú dinámicamente
 * Teniendo un array con los nombres de las opciones del menú
 * y un contenedor en el HTML donde se añadirá el menú
 * elementosDelMenu = ["Inicio", "Nosotros", "Servicios", "Contacto"]
 */
// 1. Array con los datos del menú
const menuItems = ["Inicio", "Nosotros", "Servicios", "Contacto"];

/**
 * Creación de Nodos DOM
 * Consiste en usar las funciones del document como createElement
 * y appendChild para construir la estructura del DOM nodo por nodo.
 *
 * Ventajas ✅:
 * - Seguridad: Es el método más seguro. Al usar .textContent, 
 * el navegador automáticamente neutraliza cualquier código 
 * malicioso (HTML/JS) que pudiera venir en los datos, previniendo 
 * ataques de Cross-Site Scripting (XSS).
 * - Rendimiento: Al usar un DocumentFragment para construir
 * el menú en memoria y luego añadirlo al DOM en una sola operación,
 * se minimizan las re-pintadas y re-flujos del navegador, mejorando
 * el rendimiento.
 * 
 * Desventajas ❌:
 * - Complejidad: Requiere más líneas de código y es menos
 * intuitivo que otras técnicas como innerHTML.
 * - Tiempo de desarrollo: Puede llevar más tiempo implementar
 * este método debido a su naturaleza detallada.
 * - Flexibilidad limitada: No es tan flexible como innerHTML
 * para estructuras HTML complejas.
 * - Mantenimiento: El código puede ser más difícil de leer y mantener,
 * especialmente para desarrolladores menos experimentados.
 * 
 */
function createNativeDomMenu( menuItems ) {
  // 2. Seleccionamos el contenedor <ul> que ya existe en el HTML
  const menuList = document.getElementById("menu");
  // 3. Creamos un DocumentFragment para optimizar el rendimiento
  const menuFragment = document.createDocumentFragment();

  // 4. Recorremos el array para crear cada elemento de la lista
  for (const itemText of menuItems) {
    // Creamos el elemento <li>
    const listItem = document.createElement("li");

    // Agregamos las dos clases CSS requeridas al <li>
    listItem.classList.add("menu-item", "nav-link");

    // Creamos el enlace <a>
    const linkItem = document.createElement("a");
    linkItem.textContent = itemText;
    linkItem.href = `#${itemText.toLowerCase()}`; // `https://www.${itemText.toLowerCase()}.com`

    // Añadimos el enlace <a> dentro del <li>
    listItem.appendChild(linkItem);

    // Añadimos el <li> al fragmento en memoria
    menuFragment.appendChild(listItem);
  }

  // 5. Añadimos todos los elementos del fragmento al <ul> del DOM en una sola operación
  menuList.appendChild(menuFragment);
}

/**
 * Inyección con Template Literals (innerHTML) 
 * Consiste en usar plantillas de texto con
 * innerHTML para construir la estructura HTML
 * de forma más directa.
 * 
 * Ventajas ✅:
 * - Simplicidad: Es más sencillo y rápido de implementar,
 * especialmente para estructuras HTML complejas.   
 * - Legibilidad: El código es más fácil de leer y entender,
 * ya que la estructura HTML es más evidente.
 * - Flexibilidad: Permite crear estructuras HTML complejas
 * de manera más directa y con menos código.
 * 
 * Desventajas ❌:
 * - Seguridad: Usar innerHTML puede introducir vulnerabilidades
 * de seguridad si los datos no son confiables, ya que el navegador 
 * no neutraliza automáticamente el código malicioso.
 * - Rendimiento: Cada vez que se usa innerHTML, el navegador
 * re-parsea y re-renderiza el contenido del contenedor,    
 * lo que puede afectar el rendimiento si se hace frecuentemente.
 * - Mantenimiento: El código puede volverse desordenado si se
 * mezclan demasiadas lógicas de negocio con la estructura HTML.
 * - Errores difíciles de depurar: Los errores en la sintaxis HTML
 * pueden ser difíciles de detectar y depurar, ya que no se
 * validan hasta que el navegador intenta renderizar el contenido.
 */
function createInnerHtmlMenu( menuItems) {
     // 2. Seleccionamos el contenedor <ul> que ya existe en el HTML
  const menuList = document.getElementById("menu");
    // 3. Construimos el HTML del menú usando template literals
    let menuHtml = "";
    for (const itemText of menuItems) {
        menuHtml += `
            <li class="menu-item nav-link">
                <a href="#${itemText.toLowerCase()}">${itemText}</a>
            </li>
        `;
    }
    // 4. Añadimos el HTML al <ul> del DOM
    menuList.innerHTML = menuHtml;
}


// createNativeDomMenu( menuItems );
 createInnerHtmlMenu( menuItems);
