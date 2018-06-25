import {resolvers as userResolvers } from './user';
export const resolvers  = {
  Query: {
    ...userResolvers
  }
};
