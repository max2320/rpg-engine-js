import './config/env';

import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';


import './config/schema';
import { app } from './config/rest';



const {
  WS_PORT,
  APP_DOMAIN
} = process.env;

const server = createServer(app);

server.listen(WS_PORT, () => {
  SubscriptionServer.create({
    ...process.graphql,
    execute,
    subscribe,
  }, {
    server: server,
    path: '/',
  });

  console.log(`Websocket Server is now running on ${APP_DOMAIN}:${WS_PORT}`)

});
