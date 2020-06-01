const express = require('express');
const router = express.Router();


router.get('/info', function(req, res){
    var valor = req.param("id");
    res.send("Rota info executada com sucesso…");
    console.log('Início da execução da rota info…');
    
});

router.get('/bemvindo', function(req, res){
    var nome = req.query.nome;
     res.send("Bem Vindo "+nome);
     
    });

    router.post('/soma', function(req, res){
        var v1 = req.body.valor1;
        var v2 = req.body.valor2;
        
        var resultado = parseInt(v1) + parseInt(v2);
    
        res.json({'valor1': v1,
        'valor2' : v2,
        'resultado' : resultado})
            
        });


module.exports = router;
    