const { pool } = require('../config/database');

class FeedbackModel {
    async create(feedbackData) {
        const {
            nome,
            email,
            tipo,
            mensagem,
            contato,
            ip_address,
            user_agent
        } = feedbackData;

        const query = `
            INSERT INTO feedbacks 
            (nome, email, tipo, mensagem, contato, ip_address, user_agent) 
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        const [result] = await pool.execute(query, [
            nome || null,
            email || null,
            tipo,
            mensagem,
            contato,
            ip_address,
            user_agent
        ]);

        return result.insertId;
    }

    async getAll() {
        const query = `
            SELECT * FROM feedbacks 
            ORDER BY data_criacao DESC
        `;
        const [rows] = await pool.execute(query);
        return rows;
    }

    async getById(id) {
        const query = 'SELECT * FROM feedbacks WHERE id = ?';
        const [rows] = await pool.execute(query, [id]);
        return rows[0];
    }
}

module.exports = new FeedbackModel();
