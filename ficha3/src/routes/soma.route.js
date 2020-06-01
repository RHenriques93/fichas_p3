const express = require('express');
const router = express();

router.post('/soma', function(req, res){
    var v1 = req.body.valor1;
    var v2 = req.body.valor2;
    
    var resultado = parseInt(v1) + parseInt(v2);

    var soma = {'valor1': v1,
    'valor2' : v2,
    'resultado' : resultado}

    res.send(soma);      
    
            });



module.exports = router;