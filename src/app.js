import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import usuarios from './routes/usuarios.routes.js';

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded( { extended: false }));

app.use(usuarios);

export default app;