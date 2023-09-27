"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPasswordResetEmail = exports.generatePasswordResetToken = exports.hashPassword = exports.comparePasswords = void 0;
const bcrypt_1 = require("bcrypt");
const uuid_1 = require("uuid");
const nodemailer_1 = require("nodemailer");
const saltRounds = 10;
async function comparePasswords(password, hashedPassword) {
    return bcrypt_1.default.compare(password, hashedPassword);
}
exports.comparePasswords = comparePasswords;
async function hashPassword(password) {
    return bcrypt_1.default.hash(password, saltRounds);
}
exports.hashPassword = hashPassword;
function generatePasswordResetToken() {
    return (0, uuid_1.v4)();
}
exports.generatePasswordResetToken = generatePasswordResetToken;
async function sendPasswordResetEmail(email, resetToken) {
    const transporter = nodemailer_1.default.createTransport({
        service: 'your_email_service_provider',
        auth: {
            user: 'your_email_address',
            pass: 'your_email_password',
        },
    });
    const mailOptions = {
        from: 'your_email_address',
        to: email,
        subject: 'Password Reset',
        text: `Click the following link to reset your password: ${resetToken}`,
    };
    await transporter.sendMail(mailOptions);
}
exports.sendPasswordResetEmail = sendPasswordResetEmail;
//# sourceMappingURL=password.utils.js.map