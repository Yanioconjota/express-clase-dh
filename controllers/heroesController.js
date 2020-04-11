const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

const heroesController = {
    listar: (req, res) => {
      let listaHeroes = [];
      heroes.forEach(heroe => {
        listaHeroes += `
            <h1> ${heroe.nombre}</h1>
            <strong>Profesión:</strong> <p>${heroe.profesion}</p>
            <strong>País:</strong> <p>${heroe.pais}</p>
            <strong>Bio:</strong> <p>${heroe.resenia}</p>;`
      });
      
      res.send(listaHeroes);
    },
    id: (req, res) => {
      // Acá lo primero será encontrar al héroe que corresponda
      //let heroe = __¿ ? __;
      let getHeroes = heroes.find(heroe => heroe.id == req.params.id);
      if (req.params.id <= heroes.length) {
        res.send(`<h1>Hola soy ${getHeroes.nombre}</h1> <h3>y mi profesión es ${getHeroes.profesion}</h3>`);
      } else {
        res.send('<h1>Este no es héroe que estás buscando</h1>')
      }
      // Si se encuentra al héroe se envía el nombre y su profesión
      // Si NO se encuentra se envía el mensaje de no encontrado
    },
    bio: (req, res) => {
      // Acá lo primero será encontrar al héroe que corresponda
      //let heroe = __¿ ? __;
      let getHeroes = heroes.find(heroe => heroe.id == req.params.id);

      if (req.params.bio == 'bio') {
        res.send(`
          <h1>${getHeroes.nombre}:</h1>
          <strong>Bio: </strong>
          <p>${getHeroes.resenia}</p>`);
      } else {
        res.send('<h1>Lamento que no desees saber más de mi</h1>');
      }
      // Si NO se encuentra al héroe se envía un mensaje
      // Si se encuentra al héroe:
      // Se pregunta si vino el parámetro Y el valor esperado y se envía la información
      // Si nó vino el parámetro se envía el mensaje de error
    }
  };

module.exports = heroesController;