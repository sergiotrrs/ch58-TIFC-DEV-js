const loginForm = document.forms["role-form"];

// loginForm.addEventListener("event", ()=> );
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Leer los atributos del formulario
  const identificador = document.getElementById("identificador").value;
  console.log(identificador);

  // TODO verificar los datos antes de enviarlos al backend

  const url = `http://localhost:8082/api/v1/roles/${identificador}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (response.status === 204) {
      console.log("Role deleted successfully");
      alert("Role deleted successfully");
    } else {
      console.log(response);
      // console.error("Error deleting role:", response.status, response.statusText);
      alert("Error deleting role");
      const errorObject = await response.json()
      // alert(`Error deleting role: ${errorObject.error}`);
      console.log(errorObject.trace);
    }
  } catch (error) {
    console.log("error en backend ", error);
  }
});
