require("dotenv").config();
import { Sequelize } from "sequelize";

const database = process.env.MYSQL_USUARIOS_DB || " ";
const user = process.env.MYSQL_USUARIOS_USER || " ";
const pass = process.env.MYSQL_USUARIOS_PASS || " ";
const host = process.env.MYSQL_USUARIOS_HOST || " ";

const userDB = new Sequelize(database, user, pass, {
  host,
  dialect: "mysql",
  logging: false,
  // define: {
  //   timestamps: false,
  // },
});

export default userDB;