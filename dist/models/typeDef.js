import gql from "graphql-tag";
const typeDefs = gql `
  type Query {
    users: [User]
    user(id: ID): User
  }

  # Student object
  type User {
    id: ID
    firstName: String
    lastName: String
    age: Int
  }

  # Mutation
  type Mutation {
    create(firstName: String, lastName: String, age: Int): User
    update(id: ID, firstName: String, lastName: String, age: Int): User
    delete(id: ID): User
  }
`;
// module.exports = { typeDefs };
export default typeDefs;
