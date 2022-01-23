import mssql from 'mssql';
import config from '../config';

let pool;

const dbSettings = {
  server: config.dbserver,
  user: config.dbusername,
  port: config.dbport,
  password: config.dbpassword,
  database: config.dbname,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function getConnection() {
  try {
    pool = await mssql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(JSON.stringify(error));
  }
}

export { mssql, pool };
