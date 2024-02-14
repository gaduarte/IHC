const express = require('express');
const path = require('path');
const cors = require('cors');
const Transporte = require('./classe');
const exp = require('constants');

const app = express();

// Configuração do middleware de CORS
app.use(cors());

// Configuração do middleware de análise de corpo JSON e URL
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 3000;
const tp = new Transporte();

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`);
});

// Função para gerar IDs únicos
function generateUniqueId() {
    const timestamp = new Date().getTime(); 
    const randomPart = Math.floor(Math.random() * 10000); 
    return `${timestamp}-${randomPart}`;
}

app.post('/cadastro/cliente', async(req, res) => {
    const generateId = generateUniqueId();

    const user = {
        username: req.body.username,
        email: req.body.email,
        id: generateId,
    }

    console.log('Dados de cadastro de cliente:', user.username, user.email, user.id);
    
    console.log('Cadastro de cliente realizado com sucesso.');
})

app.post('/cadastro/empresa', async(req, res) => {
    const generateId = generateUniqueId();

    const user = {
        username: req.body.username,
        localidade: req.body.localidade,
        email: req.body.email,
        id: generateId,
    }

    console.log('Dados de cadastro da empresa:', user.username, user.email, user.id);
    
    console.log('Cadastro da empresa realizado com sucesso.');
})