require("dotenv").config();
import { Sequelize } from "sequelize";

const db = process.env.MYSQL_USUARIOS_DB || " ";
const user = process.env.MYSQL_USUARIOS_USER || " ";
const pass = process.env.MYSQL_USUARIOS_PASS || " ";
const host = process.env.MYSQL_USUARIOS_HOST || " ";
const logging = process.env.STATUS === "desarrollo" ? true : false;

const userDB = new Sequelize(db, user, pass, {
  host: host,
  dialect: "mysql",
  logging,
  timezone: '-05:00',
  // define: { timestamps: false },
});

export default userDB;
