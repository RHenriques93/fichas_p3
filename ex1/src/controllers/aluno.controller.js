// Controller + MVC -> Editar Código do ficheiro aluno.controller.js
const alunodb = require('../models/aluno.model');

// comunicação com a base de dados
const sequelize = require('../config/database');

const controller = {}


//aluno_list
controller.aluno_list = async (req, res) => {
    const dados = await alunodb.findAll()
        .then(function (dados) {
            return dados;
        })
        .catch(error => {
            return 'Erro no pedido de dados ao servidor (' + error + ')';
        });

    res.json({
        'success': true,
        'dados': dados
    })
}

//aluno_detail
controller.aluno_detail = async (req, res) => {
    const {id} = req.params;
    const dados = await alunodb.findAll({ where: { id: id } })
        .then(function (dados) {
            return dados;
        })
        .catch(error => {
            return 'Erro no pedido de dados ao servidor (' + error + ')';
        });

    res.json({
        'success': true,
        'dados': dados
    });
}


//aluno_create
controller.aluno_create = async (req, res) => {
    const { nome, email, morada, telefone }  = req.body;
    const dados = await alunodb.create({
        nome: nome,
        email: email,
        morada:morada,
        telefone: telefone,
    })
    .then(function(dados){
        return dados;
    })
    .catch(error => {
        return 'Erro no pedido de dados ao servidor (' + error + ')';
    })
    res.status(201).json({
        'success': true,
        'dados': dados
    });

}



//aluno_update
controller.aluno_update = async (req, res) => {

        const {id} = req.params;
        const {nome, email, morada, telefone } = req.body;
        const dados = await alunodb.update({
            id: id,
            nome: nome,
            email: email,
            morada: morada,
            telefone: telefone
        }, {
            where: { id: id }
        })
        .then(function(dados){
            return dados;
        })
        .catch(error => {
            return 'Erro no pedido de dados ao servidor (' + error + ')';
        })
        res.json({
            'success': true,
            'dados': dados
        });    
}


//aluno_delete
controller.aluno_delete = async (req, res) => {

    const {id} = req.params;
    const dados = await alunodb.destroy({where: {id: id}});

    res.status(204).json({
        'success': true,
        'dados': dados
    });
}


module.exports = controller;