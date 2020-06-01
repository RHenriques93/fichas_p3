const express = require('express');
const router = express();

router.get('/info', function(req, res){
    var valor = req.param("id");
    res.send("[GET] Rota info executada com sucesso…");~
    console.log('Início da execução da rota info…');
    
});

module.exports = router;