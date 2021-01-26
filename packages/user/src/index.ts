import './utils/loadEnv';
import app from 'src/server';
import connectDb from '../db/connection';

const e = process.env;
const port = Number(e.port || 3000);

(async () => {
  try {
    await connectDb({
      host: e.dbHost,
      port: e.dbPort,
      username: e.dbUser,
      password: e.dbPasswor,
      name: e.dbName
    });
  } catch (e) {
    console.error('Failed to connect to the database', e);
  }
})();

app.listen(port);
