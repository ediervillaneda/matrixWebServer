import { Request, Response } from "express";
import Usuario from "../models/usuarioModel";

/**
 * Obtener todos los usuarios
 */
export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.findAll({ attributes: { exclude: ["contrasena", "token_sesion"] } });
    res.json({ usuarios });
  } catch (debug) {
    res.status(404).json({ msg: `Error al intentar buscar los usuarios`, error:true, debug });
  }
};

/**
 * Obtener un usuario por id o nombre de usuario
 */
export const getUsuario = async (req: Request, res: Response) => {
  const { query } = req;

  if (!query.length) {
    res.status(404).json({ msg: `Error al intentar buscar el usuario`, error:true });
  }

  try {
    let where = {};

    if (query.id) {
      where = { id: query.id };
    } else if (query.nombre_usuario) {
      where = { nombre_usuario: query.nombre_usuario };
    }

    const usuario = await Usuario.findOne({
      where: where,
      attributes: { exclude: ["contrasena", "token_sesion"] },
    });

    if (usuario) {
      res.status(200).json({ usuario });
    } else {
      res.status(404).json({ msg: `No existe un usuario`, error:true });
    }
  } catch (debug) {
    res.status(500).json({ msg: `Error al intentar buscar el usuario`, error:true, debug });
  }
};

/**
 * Crear un usuario
 */
export const postUsuario = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const existeUsuario = await Usuario.findOne({ where: { nombre_usuario: body.nombre_usuario } });

    if (existeUsuario) {
      return res.status(400).json({ msg: `Ya existe el usuario: ${body.nombre_usuario}` });
    }

    const usuario = await Usuario.create(body);

    res.status(200).json({ usuario });
  } catch (debug) {
    res.status(500).json({ msg: `Error al intentar crear el usuario ${body.nombre_usuario}`, error:true, debug });
  }
};

/**
 * Actualizar un usuario
 */
export const putUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const usuario = await Usuario.findByPk(id);

    if (usuario) {
      usuario.set(body);
      await usuario.save();
      res.status(200).json({ msg: `Usuario ${usuario.getDataValue("nombre_usuario")} actualizado` });
    } else {
      res.status(404).json({ msg: `No existe un usuario con el id`, error:true });
    }
  } catch (debug) {
    res.status(500).json({ msg: `Error al intentar actualizar el usuario`, error:true, debug });
  }
};

/**
 * Inhabilitar un usuario
 */
export const deleteUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);

    if (usuario) {
      const estado = usuario.getDataValue("estado");
      let msg: string = "";
      switch (estado) {
        case true:
          usuario.update({ estado: false });
          msg = "desactivado";
          break;
        case false:
          usuario.update({ estado: true });
          msg = "activado";
          break;
      }
      await usuario.save({ fields: ["estado"] });
      res.json({ msg: `Usuario '${usuario.getDataValue("nombre_usuario")}' ${msg}` });
    } else {
      res.status(404).json({ msg: `No existe un usuario con el id ${id}`, error:true });
    }
  } catch (debug) {
    res.status(500).json({ msg: `Error al intentar eliminar el usuario ${id}`, error:true, debug });
  }
};
