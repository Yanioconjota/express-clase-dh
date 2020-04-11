// Require de Express
const express = require('express'),
      port = 3030,
      errStatus = 404,
      rutasMain = require('./routes/main'),
      rutasHeroes = require('./routes/heroes'),
      rutasCreditos = require('./routes/creditos');

// Ejecución de Express
const app = express();

app.use('/', rutasMain);
app.use('/heroes', rutasHeroes);
app.use('/heroes/:id', rutasHeroes);
app.use('/heroes/:id/:bio?', rutasHeroes);
app.use('/creditos', rutasCreditos);

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
  res.status(errStatus).send(`${errStatus} not found. <br> ¡Houston, poseemos problemas!`);
});

app.listen(port, () => console.log('SITE RUNNING ON PORT: ' + port));