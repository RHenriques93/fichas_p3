const express = require('express');
const app = express();
//configurações
app.set('port', process.env.port || 3000);
app.use(express.json());
app.use(express.urlencoded({extended:true}));



/*app.get('info', (req, res) => {
  res.send("[GET] Rota info executada com sucesso…");~
  console.log('Início da execução da rota info…');
}); */

/* const rotainfo = require('./routes/rotainfo.route');
// app.use('/', rotainfo);*/

/*app.get('bemvindo', (req, res) => {
  var valor = req.query.nome;
  res.send("Bem Vindo "+valor);
});*/

/* const bemvindo = require('./routes/bemvindo.route');
    app.use('/', bemvindo); */

/* const soma = require('./routes/soma.route');
    app.use('/', soma);  */


//Middleware
app.use(function (req, res, next) {
    console.log('Data e Hora:', new Date());
    console.log('Request URL:', req.url);
    next()
  })


  

const mainroute = require('./routes/main.route');
app.use('/', mainroute);


app.listen(app.get('port'), () => {
console.log('Servidor iniciado na porta: '+ app.get('port'));
});

