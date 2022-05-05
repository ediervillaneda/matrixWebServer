import { DataTypes } from "sequelize";
import db from "../db/connection";

const bcrypt = require("bcryptjs");

const Usuario = db.define(
  "usuario",
  {
    nombre_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "El nopmbre del usuario es requerido" },
      },
    },
    estado_usuario: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: { msg: "El estado del usuario es requerido" },
      },
    },
    token_sesion: {
      type: DataTypes.STRING,
    },
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
    cedula: {
      type: DataTypes.STRING,
    },
    empresa: {
      type: DataTypes.STRING,
    },
    cargo: {
      type: DataTypes.STRING,
    },
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
