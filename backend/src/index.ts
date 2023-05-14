import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from 'body-parser';
import helmet from "helmet";
import compress from "compression";
import path from "path";
import resolvers from "./services/resolvers";
import typeDefs from "./services/schema"
import db from "./database";
import { initModels } from "../models";

const root = path.join(__dirname, "../../");
const root2 = path.join(__dirname, "../../frontend/build/index.html");
console.log("ROOT", root)
console.log("ROOT2", root2)

interface MyContext {
  token?: string;
}

// Initialize App
const app = express();
app.use(compress());
app.use(cors());
const httpServer = http.createServer(app);

// Async Start of Server
const startServer = async () => {

  initModels(db);
  await db.sync();
  // await User.sync({ alter: true });
  // await UrlModel.sync({ alter: true });
  // await Token.sync({ alter: true });
  
  // Create Apollo Servier
  const server = await new ApolloServer<MyContext>({
    schema: makeExecutableSchema({
      typeDefs,
      resolvers
    }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
 


  //  Apollo endpoint
  app.use(
    "/graphql",
      cors<cors.CorsRequest>(),
      bodyParser.json(),
      expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );

  // Helmet Section
  // app.use(helmet());
  // app.use(helmet.contentSecurityPolicy({
  //   directives: {
  //     defaultSrc: ["'self "],
  //     scriptSrc: ["'self'", "'unsafe-inline'"],
  //     styleSrc: ["'self'", "'unsafe-inline'"],
  //     imgSrc: ["'self'", "data:", "*.amazonaws.com"]
  //   }
  // }));
  // app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

  // React Server Side Rendering Section
  app.use("/", express.static(path.join(root, "/frontend/build/")));
  app.use("/uploads", express.static(path.join(root, "uploads")));
  app.get("/", (req, res) => {
    res.sendFile(path.join(root, "frontend/build/index.html"));
  });

  // Create server
  await new Promise<void>((resolve) => httpServer.listen({ port: 8000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:8000/`);
}

startServer();