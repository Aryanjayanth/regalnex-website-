export interface ServiceRequest {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  service: string;
}

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export interface EmailTemplate {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}