import { makeExecutableSchema } from 'graphql-tools';

import { types } from '../types';
import { resolvers } from '../resolvers';
import { queries } from '../queries';

const typeDefs = [
  ...queries,
  ...types
];


const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

process.graphql = {
  schema: schema
};
