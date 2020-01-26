import express from "express";
import mongoose from "mongoose";
import { ApolloServer, gpl } from "apollo-server-express";
import { resolvers } from "./resolver";
import { typeDefs } from "./typeDefs";

const server = async () => {
  const app = express();

  const server =  new ApolloServer({
    typeDefs,
    resolvers
  })

  server.applyMiddleware({app});

   try {
     await mongoose.connect("<MongoDB Atlas Connection String>", {useNewUrlParser: true})
   }catch (err) {
     console.log(err)
   }


  app.get('/', (req, res) => res.send("Hello world!"))
  app.listen({port: 4001}, () => {
    console.log('Connected');
  })
}

server();
