import * as dotenv from 'dotenv';
dotenv.config();

export const PORT: number = parseInt(process.env.PORT!);
export const NODE_ENV = process.env.ENV;

export const JWT_SECRET = process.env.JWT_SECRET!;

export const BASE_URL = {
  frontend: process.env.FRONTEND_URL,
  backend: process.env.BACKEND_URL,
};

export const REVOLUT_ACCESS_TOKEN = process.env.REVOLUT_ACCESS_TOKEN;

export const DATABASE = {
  host: process.env.DB_HOST!,
  port: parseInt(process.env.DB_PORT!),
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
};

export const SMTP_INFO = {
  user: process.env.SMTP_USER!,
  host: process.env.SMTP_HOST!,
  port: parseInt(process.env.SMTP_PORT!),
  password: process.env.SMTP_PASSWORD!,
};

export const GOOGLE = {
  client_id: process.env.GOOGLE_CLIENT_ID,
  client_secret: process.env.GOOGLE_CLIENT_SECRET,
  customer_redirect_uri: process.env.GOOGLE_CUSTOMER_REDIRECT_URI,
  password: process.env.GOOGLE_PASSWORD,
};
