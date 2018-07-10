import cookieParser from 'cookie-parser';

export const setupCookieParser = (app)=>{
  app.use(cookieParser());
};
