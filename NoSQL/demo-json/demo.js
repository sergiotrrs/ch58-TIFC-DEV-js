const fs = require('fs');
const path = './movies.json';

// Leer
const raw = fs.readFileSync(path, 'utf8');
const movies = JSON.parse(raw);
console.log('Películas actuales:', movies);

// Agregar
const nuevo = {
  nombre: "The Matrix",
  año_estreno: 1999,
  director: "The Wachowskis",
  actores: ["Keanu Reeves", "Laurence Fishburne"],
  género: "Acción"
};
movies.push(nuevo);
fs.writeFileSync(path, JSON.stringify(movies, null, 2));
console.log('Se agregó:', nuevo.nombre);
