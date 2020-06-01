var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Configurações

app.use(bodyParser.urlencoded({extended: true}));

app.set('port', process.env.PORT || 3001);

app.use('/public', express.static('assets'));


//Templating
const mustacheExpress = require('mustache-express');
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname+'/views');

//Middleware
app.use(express.json());


//Rotas
const rotas = require('./routes/main.route');
app.use('/', rotas);

//Exemplo de Outras Rotas
const exemploRotas = require('./routes/exemplo.route');
app.use('/exemplo', exemploRotas);


const alunorotas = require('./routes/aluno.route');
app.use('/api/v1', alunorotas);


//Servidor
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado na porta: '+app.get('port'));
});


