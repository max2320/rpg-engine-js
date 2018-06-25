import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import { schema } from './config/schema';

import './config/env';

const {
  WS_PORT,
  APP_DOMAIN
} = process.env;

const websocketServer = createServer((request, response) => {
  response.writeHead(404);
  response.end();
});


websocketServer.listen(WS_PORT, () => console.log(
  `Websocket Server is now running on ${APP_DOMAIN}:${WS_PORT}`
));

const subscriptionServer = SubscriptionServer.create({
  schema,
  execute,
  subscribe,
}, {
  server: websocketServer,
  path: '/graphql',
});
