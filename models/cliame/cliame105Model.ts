import { DataTypes } from "sequelize";
import matrixDB from "../../db/connectionMatrix";

const Cliame105 = matrixDB.define(
  "cliame_000105",
  {
    medico: { type: DataTypes.STRING, field: "Medico" },
    fecha_data: { type: DataTypes.DATE, field: "Fecha_Data" },
    hora_data: { type: DataTypes.STRING, field: "Hora_Data" },
    seltip: { type: DataTypes.STRING, field: "Seltip" },
    selcod: { type: DataTypes.STRING, field: "Selcod" },
    seldes: { type: DataTypes.STRING, field: "Seldes" },
    selpri: { type: DataTypes.STRING, field: "Selpri" },
    selest: { type: DataTypes.CHAR(3), field: "Selest" },
    selcux: { type: DataTypes.STRING, field: "Selcux" },
    selmat: { type: DataTypes.STRING, field: "Selmat" },
    selrel: { type: DataTypes.STRING, field: "Selrel" },
    selcam: { type: DataTypes.STRING, field: "Selcam" },
    seguridad: { type: DataTypes.STRING, field: "Seguridad" },
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, field: "id" },
  },
  {
    tableName: "cliame_000105",
    timestamps: false,
  }
);

export default Cliame105;
