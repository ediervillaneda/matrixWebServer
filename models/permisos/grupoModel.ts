import { DataTypes } from "sequelize";
import userDB from "../../db/connectionUsers";

const Grupo = userDB.define(
  "grupo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id_grupo",
    },
    nombre: {
      type: DataTypes.STRING,
      field: "nombre_grupo",
    },
    descripcion: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
  },
  {
    timestamps: false,
  }
);

export default Grupo;
