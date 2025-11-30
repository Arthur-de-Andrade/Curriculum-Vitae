const feedbackModel = require('../models/feedbackModel');
const nodemailer = require('nodemailer');

// Configurar email
// Correto
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

class FeedbackController {
    async createFeedback(req, res) {
        try {
            const { nome, email, tipo, mensagem, contato } = req.body;

            // Validações
            if (!mensagem || !tipo) {
                return res.status(400).json({
                    success: false,
                    message: 'Mensagem e tipo são obrigatórios'
                });
            }

            // Coletar informações adicionais
            const clientInfo = {
                ip_address: req.ip || req.connection.remoteAddress,
                user_agent: req.get('User-Agent')
            };

            // Salvar no banco
            const feedbackId = await feedbackModel.create({
                nome,
                email,
                tipo,
                mensagem,
                contato: Boolean(contato),
                ...clientInfo
            });

            // Enviar email
            await this.sendEmailNotification({
                nome,
                email,
                tipo,
                mensagem,
                contato,
                feedbackId
            });

            res.status(201).json({
                success: true,
                message: 'Feedback enviado com sucesso!',
                data: { feedbackId }
            });

        } catch (error) {
            console.error('Erro no controller:', error);
            res.status(500).json({
                success: false,
                message: 'Erro interno do servidor'
            });
        }
    }

    async sendEmailNotification(feedbackData) {
        try {
            const { nome, email, tipo, mensagem, contato, feedbackId } = feedbackData;

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER, // Enviar para você mesmo
                subject: `📝 Novo Feedback - ${tipo} (ID: ${feedbackId})`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px;">
                        <h2 style="color: #2c3e50;">🎯 Novo Feedback Recebido</h2>
                        
                        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                            <p><strong>📋 ID do Feedback:</strong> ${feedbackId}</p>
                            <p><strong>👤 Nome:</strong> ${nome || 'Não informado'}</p>
                            <p><strong>📧 Email:</strong> ${email || 'Não informado'}</p>
                            <p><strong>🎯 Tipo:</strong> ${this.getTipoLabel(tipo)}</p>
                            <p><strong>💬 Permite contato:</strong> ${contato ? '✅ Sim' : '❌ Não'}</p>
                        </div>
                        
                        <div style="margin: 20px 0;">
                            <h3 style="color: #2c3e50;">💭 Mensagem:</h3>
                            <div style="background: white; padding: 15px; border-left: 4px solid #3498db;">
                                ${mensagem.replace(/\n/g, '<br>')}
                            </div>
                        </div>
                        
                        <hr style="border: none; border-top: 2px solid #ecf0f1;">
                        <p style="color: #7f8c8d; font-size: 12px;">
                            ⏰ Enviado em: ${new Date().toLocaleString('pt-BR')}
                        </p>
                    </div>
                `
            };

            await transporter.sendMail(mailOptions);
            console.log('✅ Email de notificação enviado!');

        } catch (error) {
            console.error('❌ Erro ao enviar email:', error);
        }
    }

    getTipoLabel(tipo) {
        const tipos = {
            'sugestao': '💡 Sugestão',
            'critica': '🎯 Crítica Construtiva',
            'elogio': '⭐ Elogio',
            'duvida': '❓ Dúvida',
            'oportunidade': '💼 Oportunidade'
        };
        return tipos[tipo] || tipo;
    }

    async getFeedbacks(req, res) {
        try {
            const feedbacks = await feedbackModel.getAll();
            res.json({
                success: true,
                data: feedbacks
            });
        } catch (error) {
            console.error('Erro ao buscar feedbacks:', error);
            res.status(500).json({
                success: false,
                message: 'Erro ao buscar feedbacks'
            });
        }
    }
}

module.exports = new FeedbackController();
