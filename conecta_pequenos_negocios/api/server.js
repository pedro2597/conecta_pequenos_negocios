const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const companyRoutes = require('./routes/companies');
const dados = require('./dados');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Compartilhar os dados com as rotas
app.use((req, res, next) => {
    req.dados = dados;
    next();
});

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/empresas', companyRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
