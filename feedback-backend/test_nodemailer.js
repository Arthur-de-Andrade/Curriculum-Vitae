const nodemailer = require('nodemailer');

console.log('Nodemailer type:', typeof nodemailer);
console.log('createTransporter type:', typeof nodemailer.createTransporter);

try {
    const transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
            user: 'test',
            pass: 'test'
        }
    });
    console.log('Transporter created successfully');
} catch (error) {
    console.error('Error creating transporter:', error);
}
