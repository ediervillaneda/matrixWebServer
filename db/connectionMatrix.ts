require("dotenv").config();
import { Sequelize } from "sequelize";

const dbM = process.env.MYSQL_MATRIX_DB || " ";
const userM = process.env.MYSQL_MATRIX_USER || " ";
const passM = process.env.MYSQL_MATRIX_PASS || " ";
const hostM = process.env.MYSQL_MATRIX_HOST || " ";

const matrixDB = new Sequelize(dbM, userM, passM, {
  host: hostM,
  dialect: "mysql",
  logging: false,
  // define: {
  //   timestamps: false,
  // },
});

export default matrixDB;
