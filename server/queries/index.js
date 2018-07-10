import {queries as userQueries} from './user';

export const queries = [
  `type Query {
    ${userQueries}
  }`
];
