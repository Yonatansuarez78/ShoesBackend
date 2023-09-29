import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import authRoutes from './routes/usuarios.routes.js';
import taskRoutes from './routes/tasks.routes.js';
import cookieParser from 'cookie-parser'

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded( { extended: false }));

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;