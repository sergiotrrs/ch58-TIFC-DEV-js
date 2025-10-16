

const createCard = ( roleArray ) => {
    const cardsContainer = document.getElementById("cards");
    const cards = roleArray.map( role => {
        return `
        <div class="col-6 col-md-4 mb-3">
            <div class="card" ">
                <div class="card-body">
                    <h5 class="card-title">${role.nombre}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p class="card-text">${role.description}</p>
                    <a href="#" class="card-link">${role.identificador}</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        </div>
        `;
    }
    )
    cardsContainer.innerHTML = cards.join("");
}

const getAllRoles = async ( url ) =>{

    const response = await fetch(url);
    if( response.status === 200 ){
        const data = await response.json();
        console.log(data);
        // Agregar la capa de DTO en lado del cliente
        createCard(data);
    } else {
        console.error("Error fetching roles:", response.status, response.statusText);
    }

}



getAllRoles( "http://localhost:8082/api/v1/roles");