import { Request, Response } from "express";
import matrixDB from "../../db/connectionMatrix";

const getAseguradorasByDoc = async (req: Request, res: Response) => {
  const { documento, empresa } = req.body;

  try {
    const query = "CALL wscall_getAseguradorasByDoc(:documento, :empresa)";
    const replacements = { replacements: { documento, empresa } };

    const data = await matrixDB.query(query, replacements);

    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ msg: "Sin valores encontrados", error:true });
    }
  } catch (debug) {
    res.status(500).json({ msg: "Error al intentar realizar la consulta", error:true, debug });
  }
};

export default getAseguradorasByDoc;
