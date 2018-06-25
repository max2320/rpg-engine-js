import { createServer } from 'http';

import {setup} from './config/setup';
import './config/env';

const {
  PORT,
  APP_DOMAIN
} = process.env;

const app = setup();

app.set('port', PORT);

var server = createServer(app);

server.listen(PORT, () => console.log(
  `Web Server is now running on http://${APP_DOMAIN}:${PORT}`
));
