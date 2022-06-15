import { Request, Response } from "express";
import Cliame105 from "../../models/cliame/cliame105Model";

const cliame105 = async (req: Request, res: Response) => {
  const { seltip } = req.body;

  try {
    const data = await Cliame105.findAll({ where: { seltip, selest: "on" } });

    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ msg: "Parametros no encontrados", error: true });
    }
  } catch (debug) {
    res.status(500).json({ msg: "Error al intentar realizar la consulta", error:true, debug });
  }
};

export default cliame105;
