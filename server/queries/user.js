export const queries =`
  "List Users"
  users(limit: Int, page: Int): [User],
  "User by id"
  user(id: Int!): User,

`;
