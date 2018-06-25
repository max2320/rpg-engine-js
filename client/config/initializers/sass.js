import path from 'path';
import sassMiddleware from 'node-sass-middleware';

export const setupSass = (app, srcPath, destPath)=>{
  app.use(sassMiddleware({
    debug: true,
    src: path.resolve(srcPath, 'style.scss'),
    dest: path.resolve(destPath, 'style.css'),
    indentedSyntax: false, // true = .sass and false = .scss
    outputStyle: 'compressed',
    prefix:  '/'
  }));
}
