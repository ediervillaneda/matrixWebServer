require("dotenv").config();
import { Sequelize } from "sequelize";

const dbU = process.env.MYSQL_USUARIOS_DB || " ";
const userU = process.env.MYSQL_USUARIOS_USER || " ";
const passU = process.env.MYSQL_USUARIOS_PASS || " ";
const hostU = process.env.MYSQL_USUARIOS_HOST || " ";

const userDB = new Sequelize(dbU, userU, passU, {
  host: hostU,
  dialect: "mysql",
  logging: false,
  // define: {
  //   timestamps: false,
  // },
});

export default userDB;
