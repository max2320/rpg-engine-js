import path from 'path';

import { setupStatic } from './statics';
import { setupLogger } from './logger';
import { setupBodyParser } from './body_parser';
import { setupCookieParser } from './cookie_parser';
import { setupSass } from './sass';
import { setupRoutes } from '../../routes';
import { setupWebpack } from './webpack';

const appPath = path.join(__dirname, '..', '..');

const sourcePath = path.join(appPath, '/src');
const jsSrcPath = path.join(sourcePath, '/javascript');
const cssSrcPath = path.join(sourcePath, '/stylesheets');


const destPath = path.join(appPath, '/public');
const jsDestPath = path.join(destPath, '/js');
const cssDestPath = path.join(destPath, '/css');

const staticPath = destPath;

export const initializers = (app) => {
  setupLogger(app);
  setupBodyParser(app);
  setupCookieParser(app);
  setupStatic(app, staticPath);
  setupRoutes(app);
  setupSass(app, cssSrcPath, cssDestPath);
  setupWebpack(app, jsSrcPath, jsDestPath);
}
