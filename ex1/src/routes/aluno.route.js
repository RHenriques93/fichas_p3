const express = require('express');
const router = express.Router();

//Importa os Controladores
const alunoController = require('../controllers/aluno.controller');


router.get('/v1', (req, res) => {
    res.json({status: 'Rota Executada...'});
});

router.get('/alunos', alunoController.aluno_list);

router.get('/aluno/:id', alunoController.aluno_detail);

router.post('/aluno', alunoController.aluno_create);

router.put('/aluno/:id', alunoController.aluno_update);

router.delete('/aluno/:id', alunoController.aluno_delete);

module.exports = router;