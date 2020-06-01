const controller = {}
controller.test = (req, res) => {
        const data = {
            name: 'Rafael Henriques',
            age: 26,
            city: 'Coimbra'
        }
        console.log("Envio de dados do Controlador EXEMPLO.");
        res.json(data);
};


// Controller + MVC -> Editar Código do ficheiro exemplo.controller.js
const alunodb = require('../models/exemplo.model');
const sequelize = require('../config/database');


//sequelize.sync();


// solução mais acertada

controller.testdata = async (req, res) => {
        const response = await sequelize.sync().then(function(){
        const data = alunodb.findAll()
        return data;   

    })
.catch(err => {
    return err;
});
res.json(response)
}

controller.list = async (req, res) => {
        const data = await alunodb.findAll();
        res.json(data);
}   

/*solução menos correta
controllers.list = async (req, res) => {
    const data = await aluno.findAll();
    res.json(data);
}
*/

module.exports = controller;