import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Service request endpoint
app.post('/api/service-request', async (req, res) => {
  try {
    const { name, email, service, message } = req.body;

    // Email to business owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      subject: 'New Service Request',
      html: `
        <h2>New Service Request Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    // Email to customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Service Request Confirmation',
      html: `
        <h2>Thank you for your interest in RegalNex!</h2>
        <p>We have received your service request for ${service}.</p>
        <p>Our team will review your request and get back to you shortly.</p>
        <p>Best regards,<br>RegalNex Team</p>
      `
    };

    // Send emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(customerMailOptions);

    res.status(200).json({ message: 'Service request received successfully' });
  } catch (error) {
    console.error('Error processing service request:', error);
    res.status(500).json({ error: 'Failed to process service request' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});