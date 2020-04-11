const app = require('../app'),
      port = 3030,
      errStatus = 404;

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
  res.status(errStatus).send(`${errStatus} not found. <br> ¡Houston, poseemos problemas!`);
});

app.listen(port, () => console.log('SITE RUNNING ON PORT: ' + port));

module.exports = server;