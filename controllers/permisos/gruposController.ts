import { Request, Response } from "express";
import Grupo from "../../models/permisos/grupoModel";
import GrupoUsuario from "../../models/permisos/grupoUsuarioModel";

/**
 * Inhabilitar un usuario
 */
export const getGrupos = async (req: Request, res: Response) => {
  const { usuarioId } = req.body;

  try {
    let where = { usuarioId };
    const grupo = await GrupoUsuario.findAll({ where, include: [Grupo] });

    if (grupo) {
      res.json(grupo);
    } else {
      res.status(404).json({ msg: `No existe un usuario con el id ${usuarioId}`, error: true });
    }
  } catch (debug) {
    res.status(500).json({ msg: `Error al intentar buscar el usuario ${usuarioId}`, error: true, debug });
  }
};
