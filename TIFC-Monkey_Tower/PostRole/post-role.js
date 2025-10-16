

const loginForm = document.forms["role-form"];

// loginForm.addEventListener("event", ()=> );
loginForm.addEventListener("submit", async (event)=>{
    event.preventDefault();

    // Leer los atributos del formulario
    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    
    // TODO verificar los datos antes de enviarlos al backend
    
    // Objeto que se enviará al backend en el cuerpo de la petición
    const formData = {
        nombre: nombre,
        descripcion: descripcion    
    }
    const url = "http://localhost:8082/api/v1/roles";
    const response = await fetch( url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    
    if( response.status === 201 ){
        const data = await response.json();
        console.log("Role created successfully:", data);
        alert("Role created successfully");
    }else {
        console.error("Error creating role:", response.status, response.statusText);
        alert("Error creating role");
    }
    
} );