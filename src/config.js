import { config } from 'dotenv';

config();

console.log(process.env.PORT);

export default {
  port: process.env.PORT || 4000,
  dbserver: process.env.DBSERVER || '',
  dbusername: process.env.DBUSERNAME || '',
  dbpassword: process.env.DBPASSWORD || '',
  dbport: Number(process.env.DBPORT),
};
