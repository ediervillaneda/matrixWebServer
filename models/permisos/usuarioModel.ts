import { DataTypes } from "sequelize";
import userDB from "../../db/connectionUsers";

const bcrypt = require("bcryptjs");

const Usuario = userDB.define(
  "usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id_usuario",
    },
    nombres: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "El nombres del usuario es requerido" },
      },
    },
    nombre_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "El nombre del usuario es requerido" },
      },
    },
    estado_usuario: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: { msg: "El estado del usuario es requerido" },
      },
    },
    ultimo_ingreso: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    token_sesion: DataTypes.STRING,
    codigo_dependencia: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "El codigo de dependencia es requerido" },
      },
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "La contraseña no puede estar vacia" },
      },
      set(value) {
        const salt = bcrypt.genSaltSync();
        this.setDataValue("contrasena", bcrypt.hashSync(value, salt));
      },
    },

    cedula: DataTypes.STRING,
    empresa: DataTypes.STRING,
    cargo: DataTypes.STRING,
    correo: {
      type: DataTypes.STRING,
      validate: {
        isEmail: { msg: "El correo no es valido" },
      },
    },
  },
  {
    timestamps: false,
  }
);

export default Usuario;
