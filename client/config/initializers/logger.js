import logger from 'morgan';

export const setupLogger = (app)=>{
  app.use(logger('dev'));
};
