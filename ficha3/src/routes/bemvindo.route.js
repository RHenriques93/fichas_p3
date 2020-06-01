const express = require('express');
const router = express();

router.get('/bemvindo', function(req, res){
        var valor = req.query.valor;
         res.send("Bem Vindo "+valor);
         
        });

module.exports = router;