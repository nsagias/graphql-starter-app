import { Sequelize, Options } from "sequelize";

import configFile from "../config/index"

const env = process.env.NODE_ENV || "development";
const config = (configFile as {[key: string]: Options})[env];
const db: Sequelize = new Sequelize({
  ...config,
  define: {
    underscored: true
  }
});

try {
  db.authenticate();
  console.log("DB SUCCESS")
} catch (error) {
  console.log("DB FAILED");
};


export default db;