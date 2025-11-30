const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

// Criar tabela se não existir
async function createTable() {
    try {
        const connection = await pool.getConnection();

        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS feedbacks (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(100),
                email VARCHAR(100),
                tipo VARCHAR(50) NOT NULL,
                mensagem TEXT NOT NULL,
                contato BOOLEAN DEFAULT FALSE,
                data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                ip_address VARCHAR(45),
                user_agent TEXT
            )
        `;

        await connection.execute(createTableQuery);
        console.log('✅ Tabela feedbacks criada/verificada com sucesso!');
        connection.release();
    } catch (error) {
        console.error('❌ Erro ao criar tabela:', error);
    }
}

module.exports = { pool, createTable };
