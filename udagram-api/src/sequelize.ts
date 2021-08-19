import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";
console.log(config);
export const sequelize = new Sequelize(
  "postgres://postgres:postgres@udagram-db.cc4sjlh5deyt.us-east-1.rds.amazonaws.com:5432/postgres"
);
// ({
//   username: config.username,
//   password: config.password,
//   database: config.database,
//   host: config.host,
//   dialect: "postgres",
//   storage: ":memory:",
// });
// (
//   "postgres://postgres:postgres@udagram-db.cc4sjlh5deyt.us-east-1.rds.amazonaws.com:5432/postgres"
// );
