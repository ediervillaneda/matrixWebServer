import { Request, Response } from "express";
import Grupo from "../../models/permisos/grupoModel";
import GrupoUsuario from "../../models/permisos/grupoUsuarioModel";
const bcrypt = require("bcryptjs");

/**
 * Inhabilitar un usuario
 */
export const getGrupos = async (req: Request, res: Response) => {
  const { usuarioId } = req.body;


  try {
    let where = { usuarioId: usuarioId };
    const grupo = await GrupoUsuario.findAll({
      where,
      include: Grupo,
    });

    if (grupo) {
      console.log(grupo);

      res.json(grupo);
    } else {
      res.status(404).json({ msg: `No existe un usuario con el id ${usuarioId}`, error: true });
    }
  } catch (debug) {
    res.status(500).json({ msg: `Error al intentar buscar el usuario ${usuarioId}`, error: true, debug });
  }
};
