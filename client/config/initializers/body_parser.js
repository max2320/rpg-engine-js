import {
  json as jsonEncoder,
  urlencoded as urlEncoder
} from 'body-parser';

export const setupBodyParser = (app)=>{
  app.use(jsonEncoder());
  app.use(urlEncoder({
    extended: false
  }));
};
