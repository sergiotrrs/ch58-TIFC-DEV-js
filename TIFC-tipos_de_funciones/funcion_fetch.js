
const consultarUsuarios = async ( url ) => {

    try{
    const response = await fetch(  );
    console.log( response.status);
    console.log( response );
    const users = await response.json(); // parseando de JSON a objetos de JavaScript
    console.log( users );
    } catch ( error ) {
        console.log( "Error en la petición: " + error );
    }


}

consultarUsuarios("https://fakestoreapi.com/users");