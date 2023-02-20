import express from 'express';
import dotenv from 'dotenv';

import bodyParser from 'body-parser';
import cors from 'cors';

import publicRoutes from './src/routes/public';
import projectRoutes from './src/routes/projects'
import apiRoutes from './src/routes/api';
import adminRoutes from './src/routes/admin';
import apiMiddleware from './src/middleware/apiAuth';
import errorHandler from './src/middleware/errorHandler';

dotenv.config();
require('./src/config/sequelize');

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(cors());
app.use(bodyParser.json());
app.use('/auth', publicRoutes);
app.use('/projects', apiMiddleware, projectRoutes)
app.use('/api', apiMiddleware, apiRoutes);
app.use('/admin', apiMiddleware, adminRoutes);
app.use(errorHandler);

module.exports = app;
