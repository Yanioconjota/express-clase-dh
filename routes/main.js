const fs = require('fs'),
      express = require('express'),
      router = express.Router(),
      heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

 let listaHeroes = [];
 
// Ruta Raíz / ➝ Home
router.get('/', (req, res) => {
  let mensaje = 'Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio.Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos.Recuerda: ¡nunca pares de creer en ti!.'
  res.send(mensaje);
});

module.exports = router;