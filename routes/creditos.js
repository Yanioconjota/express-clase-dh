const express = require('express'),
  router = express.Router(),
  creditosController = require('../controllers/creditosController');

// Ruta Créditos
router.get('/', creditosController.creditos);

module.exports = router;
