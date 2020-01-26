import { Users } from "./models/users";
import { GraphQLSchema } from 'graphql'; // ES6

export const resolvers = {
  Query: {
    users: () => Users.find(),
    getUser: (_, { id }) => Users.findById(id),
    deleteUser: (_, { id }) => Users.findByIdAndDelete(id),
    updateUser: (_, { id ,department }) => Users.findByIdAndUpdate(id, {department: department})
  },
  Mutation: {
     createUser: async(_, { name, email, phone, department }) => {
       const user = new Users ({ name, email, phone, department });
       await user.save();
       return user;
     }
  }
}
