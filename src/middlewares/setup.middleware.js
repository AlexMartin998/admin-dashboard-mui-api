import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';

export const setupMiddlewares = app => {
  app.use(cors());
  app.use(express.json());

  // forms:
  // app.use(express.urlencoded({ extended: false }));

  // serve static files
  // app.use(express.static(path.join(__dirname, './../public')));

  app.use(helmet());
  // app.use(helmet.crossOriginResourcePolicy());
  app.use(compression());
  app.use(morgan('dev'));

  // Other middlewares
};
