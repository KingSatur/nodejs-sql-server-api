import express from 'express';
import config from './config';
import productRouter from './routes/product.route';

const app = express();

app.set('port', config.port);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', productRouter);

export default app;
