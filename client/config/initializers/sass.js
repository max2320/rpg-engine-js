import path from 'path';
import sassMiddleware from 'node-sass-middleware';

export const setupSass = (app, srcPath, destPath)=>{
  app.use(sassMiddleware({
    debug: true,
    response: true,
    src: srcPath,
    dest: destPath,
    indentedSyntax: false, // true = .sass and false = .scss
    outputStyle: 'compressed',
    prefix:  '/css'
  }));
}
