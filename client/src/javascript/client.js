import { SubscriptionClient } from 'subscriptions-transport-ws';
import ApolloClient from 'apollo-client';

export const createApolloClient = () => {

const { WS_PORT, APP_DOMAIN  } = ENV;

const GRAPHQL_ENDPOINT = `ws://${APP_DOMAIN}:${WS_PORT}/graphql`;

const client = new SubscriptionClient(GRAPHQL_ENDPOINT, {
  reconnect: true,
});

  return new ApolloClient({
    networkInterface: client,
  });
}
