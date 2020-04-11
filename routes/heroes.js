const express = require('express'),
      router = express.Router(),
      heroesController = require('../controllers/heroesController');

router.get('/', heroesController.listar);

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
router.get('/:id', heroesController.id);

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
router.get('/:id/:bio?', heroesController.bio);

module.exports = router;