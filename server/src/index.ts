import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { ServiceRequest, EmailConfig, EmailTemplate } from './types';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Email transporter setup
const emailConfig: EmailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER || '',
    pass: process.env.EMAIL_PASS || ''
  }
};

const transporter = nodemailer.createTransport(emailConfig);

// Helper function to generate email content
const generateEmailContent = (data: ServiceRequest): EmailTemplate => {
  const businessEmail = process.env.BUSINESS_EMAIL || 'business@regalnex.com';
  
  const htmlContent = `
    <h2>New Service Request</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
    ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
    <p><strong>Service:</strong> ${data.service}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message}</p>
  `;

  return {
    from: emailConfig.auth.user,
    to: businessEmail,
    subject: `New Service Request from ${data.name}`,
    text: `New service request from ${data.name}. Service: ${data.service}. Message: ${data.message}`,
    html: htmlContent
  };
};

// API endpoint for service requests
app.post('/api/service-request', async (req, res) => {
  try {
    const serviceRequest: ServiceRequest = req.body;
    
    // Validate required fields
    if (!serviceRequest.name || !serviceRequest.email || !serviceRequest.message || !serviceRequest.service) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send email
    const emailContent = generateEmailContent(serviceRequest);
    await transporter.sendMail(emailContent);

    // Send confirmation email to user
    const userConfirmation: EmailTemplate = {
      from: emailConfig.auth.user,
      to: serviceRequest.email,
      subject: 'Thank you for your service request - RegalNex',
      text: `Dear ${serviceRequest.name},\n\nThank you for your service request. We have received your inquiry and will get back to you shortly.\n\nBest regards,\nRegalNex Team`,
      html: `
        <h2>Thank you for your service request</h2>
        <p>Dear ${serviceRequest.name},</p>
        <p>Thank you for your service request. We have received your inquiry and will get back to you shortly.</p>
        <p>Best regards,<br>RegalNex Team</p>
      `
    };

    await transporter.sendMail(userConfirmation);

    res.status(200).json({ message: 'Service request received successfully' });
  } catch (error) {
    console.error('Error processing service request:', error);
    res.status(500).json({ error: 'Failed to process service request' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});