import { Sequelize, Options } from "sequelize";
import models from "../../models";

import configFile from "../config/index"

const env = process.env.NODE_ENV || "development";
const config = (configFile as {[key: string]: Options})[env];
const sequelize: Sequelize = new Sequelize({
  ...config,
  define: {
    underscored: true
  }
});

try {
  sequelize.authenticate();
  console.log("DB SUCCESS")
} catch (error) {
  console.log("DB FAILED");
};

const db = {
  models: models,
  sequelize,
}

export default db;