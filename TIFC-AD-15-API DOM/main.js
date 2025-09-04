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
function changeTitle( newText ) {
    // Obtenemos la referencia al elemento H1
    const mainHeader = document.getElementById("main-header");
    console.log(mainHeader);
    mainHeader.textContent = newText;
    mainHeader.style.color = "blue";
    // mainHeader.innerText = newText;
    // mainHeader.innerHTML = "<em>" + newText + "</em>";
}

changeTitle( "Hola, ya casi nos vamos a comer, ñam ñam");

