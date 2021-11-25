import SHA256 from 'crypto-js/sha256';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.SHA256_SECRET ;

export const encryptData = async data => {
  const cipher = await SHA256(data, secret);
  return cipher.toString();
};
