const express = require('express');
const router = express.Router();

//Importa os Controladores
const exemploController = require('../controllers/exemplo.controller');

router.get('/teste', exemploController.test);

router.get('/testedata', exemploController.testdata);

router.get('/list', exemploController.list);

router.get('/exemplo', (req, res) => {
    res.json({status: 'Rota Executada...'});
});


module.exports = router;