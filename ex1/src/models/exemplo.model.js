const sequelize = require('sequelize');
const db = require('../config/database');

var alunodb = db.define('alunos',  {
    id: {type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nome: sequelize.STRING, email: sequelize.STRING, morada: sequelize.STRING,
    telefone: sequelize.BIGINT
},{

timeStamps: false, tableName: 'aluno'

});

module.exports = alunodb;