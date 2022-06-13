import { DataTypes } from "sequelize";
import userDB from "../db/connectionUsers";

const Aplicacion = userDB.define(
  "aplicaciones",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id_aplicacion",
    },
    nombre_aplicacion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "El nombre de la aplicación es requerido" },
      },
    },
    uid_aplicacion: DataTypes.STRING,
    tiempo_token: DataTypes.SMALLINT,
    estado_aplicacion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: { msg: "El estado del usuario es requerido" },
      },
    },
  },
  {
    timestamps: false,
  }
);

export default Aplicacion;
