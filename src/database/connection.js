import mssql from 'mssql';
import config from '../config';

const dbSettings = {
  server: 'localhost',
  user: config.dbusername,
  port: config.dbport,
  password: config.dbpassword,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

console.log();

async function getConnection() {
  const pool = await mssql.connect(dbSettings);
  const result = await pool.request().query('SELECT 1');
  console.log(result);
}

getConnection();
