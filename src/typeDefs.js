import { gql } from "apollo-server-express";

export const typeDefs = gql `

type Query {
  users: [Users!]!
  getUser(id: ID!): Users
  deleteUser(id: ID!): Users
  updateUser(id: ID!, department: String!): Users
}

type Users {
  id: ID!
  name: String!
  email: String!
  phone: Int!
  department: String!
}

type Mutation {
  createUser(name: String!, email: String!, phone: String!, phone: Int!, department: String!): Users!
}
`;
