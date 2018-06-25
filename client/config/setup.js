import express from 'express';

import { initializers } from './initializers'


export const setup = () => {
  const app = express();

  initializers(app);

  return app;
}
