import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';


const saltRounds = 10;

export async function comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, saltRounds);
}

export function generatePasswordResetToken(): string {
  return uuidv4();
}
export async function sendPasswordResetEmail(email: string, resetToken: string): Promise<void> {
  // Create a Nodemailer transporter with your email service provider's configuration
  const transporter = nodemailer.createTransport({
    service: 'your_email_service_provider',
    auth: {
      user: 'your_email_address',
      pass: 'your_email_password',
    },
  });

  // Define the email options
  const mailOptions = {
    from: 'your_email_address',
    to: email,
    subject: 'Password Reset',
    text: `Click the following link to reset your password: ${resetToken}`,
  };

  // Send the email
  await transporter.sendMail(mailOptions);
}