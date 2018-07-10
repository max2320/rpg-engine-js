import { static as staticLoader } from 'express';

export const setupStatic = (app, path)=>{
  app.use(staticLoader(path));
};
