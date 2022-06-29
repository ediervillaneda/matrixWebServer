import { DataTypes } from "sequelize";
import userDB from "../../db/connectionUsers";
import Grupo from "./grupoModel";
import Usuario from "./usuarioModel";

const GrupoUsuario = userDB.define(
  "grupos_usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id_grupos_usuario",
    },
    grupoId: {
      type: DataTypes.INTEGER,
      field: "id_grupo",
      references: "grupos",
      key: "id_grupo",
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      field: "id_usuario",
      references: "usuarios",
      key: "id_usuario",
    },
  },
  {
    timestamps: false,
    defaultScope: {
      attributes: { exclude: ["grupoId", "usuarioId"] },
    },
  }
);

Grupo.hasMany(GrupoUsuario, { foreignKey: "grupoId" });
Usuario.hasMany(GrupoUsuario, { foreignKey: "usuarioId" });


GrupoUsuario.belongsTo(Grupo);
GrupoUsuario.belongsTo(Usuario);

export default GrupoUsuario;
