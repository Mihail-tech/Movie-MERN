import dotenv from 'dotenv';

dotenv.config();

export const CONNECTION_URL = process.env.DB_URL;

export const DATABASE_NAME = 'films';
