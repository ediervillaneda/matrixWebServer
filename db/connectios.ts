import { Sequelize } from "sequelize";

const database = process.env.MYSQL_DB || "node";
const user = process.env.MYSQL_USER || "root";
const pass = process.env.MYSQL_PASS || "root";
const host = process.env.MYSQL_HOST || "localhost";

const db = new Sequelize(database, user, pass, {
  host,
  dialect: "mysql",
  logging: false,
  // define: {
  //   timestamps: false,
  // },
});

export default db;
