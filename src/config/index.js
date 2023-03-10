import { config } from 'dotenv';

if (process.env.NODE_ENV !== 'producction') config();

export const PORT = process.env.PORT || 3300;
export const MONGODB_URI = process.env.MONGODB_URI;
export const STAGE = process.env.STAGE || 'dev';
export const SECRETORKEY_JWT = process.env.SECRETORKEY_JWT;
