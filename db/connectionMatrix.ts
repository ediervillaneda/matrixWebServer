require("dotenv").config();
import { Sequelize } from "sequelize";

const db = process.env.MYSQL_MATRIX_DB || " ";
const user = process.env.MYSQL_MATRIX_USER || " ";
const pass = process.env.MYSQL_MATRIX_PASS || " ";
const host = process.env.MYSQL_MATRIX_HOST || " ";
const port = Number(process.env.MYSQL_MATRIX_PORT || 2482);

const matrixDB = new Sequelize(db, user, pass, {
  host,
  port,
  dialect: "mysql",
  logging: true,
  // define: {
  //   timestamps: false,
  // },
});

export default matrixDB;
