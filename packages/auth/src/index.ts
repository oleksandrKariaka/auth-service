import './utils/loadEnv';
import app from 'src/server';

const port = Number(process.env.port || 4000);

app.listen(port);
