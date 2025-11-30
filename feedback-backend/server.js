const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const { createTable } = require('./config/database');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();

// Middlewares de segurança
app.use(helmet());

// CORS configurado para aceitar local e produção
const allowedOrigins = [
    'http://localhost:5500',
    'http://127.0.0.1:5500',
    'https://arthur-de-andrade.github.io'
];

app.use(cors({
    origin: function (origin, callback) {
        // Permitir requisições sem origin (como Postman ou mobile apps)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'A política CORS deste site não permite acesso desta origem.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));

// Middlewares
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Log de requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Rotas
app.use('/api', feedbackRoutes);

// Rota de health check
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV
    });
});

// Rota 404
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Rota não encontrada'
    });
});

// Error handler
app.use((error, req, res, next) => {
    console.error('Erro não tratado:', error);
    res.status(500).json({
        success: false,
        message: 'Erro interno do servidor'
    });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        // Criar tabela no banco
        await createTable();

        app.listen(PORT, () => {
            console.log(`🚀 Servidor rodando na porta ${PORT}`);
            console.log(`📊 Ambiente: ${process.env.NODE_ENV}`);
            console.log(`🔗 Health check: http://localhost:${PORT}/health`);
            console.log(`📝 API Feedback: http://localhost:${PORT}/api/feedback`);
        });
    } catch (error) {
        console.error('❌ Erro ao iniciar servidor:', error);
        process.exit(1);
    }
}

startServer();
