import { Request, Response } from "express";
import matrixDB from "../../db/connectionMatrix";

const medidasAntropometricas = async (req: Request, res: Response) => {
  const { historia } = req.body;

  try {
    const query = "CALL sp_getMedidasAntropometricas(:historia)";
    const replacements = { replacements: { historia } };

    const data = await matrixDB.query(query, replacements);

    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ msg: "Sin valores encontrados" });
    }
  } catch (error) {
    console.error(error);

    res.status(500).json({ msg: "Error al intentar realizar la consulta", error });
  }
};

export default medidasAntropometricas;
