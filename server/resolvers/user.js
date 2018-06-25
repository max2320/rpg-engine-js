import User from '../entities/user';

const instance = new User();

export const resolvers = {
  users: (_, { limit, page }) => {
    return instance.getAll(limit, page)
  },
  user: (_, { id }) => {
    return instance.getOne(id);
  }
}
