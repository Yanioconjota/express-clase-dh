// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));
let listaHeroes = [];

// Ruta Raíz / ➝ Home
app.get('/', (req, res) => {
  let mensaje = 'Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio.Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos.Recuerda: ¡nunca pares de creer en ti!.'
  res.send(mensaje);
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', (req, res) => {
  let getHeroes = heroes.forEach(heroe => {
    listaHeroes += `
    <h1> ${heroe.nombre}</h1>
    <strong>Profesión:</strong> <p>${heroe.profesion}</p>
    <strong>País:</strong> <p>${heroe.pais}</p>
    <strong>Bio:</strong> <p>${heroe.resenia}</p>;`
  });
  res.send(listaHeroes);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/:id', (req, res) => {
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
});

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/:id/:bio?', (req, res) => {
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
});

// Ruta Créditos
app.get('/creditos', (req,res)=>{
  res.send(`
    <h1>Realizado por:</h1>
    <strong>Ariadna Naya, Ezequiel Coletta, Alexandra Velasquez y Janio Isacura</strong>`);
});

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
  res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});