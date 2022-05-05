import { Request, Response } from "express";
import { json } from "sequelize/types";
import Usuario from "../models/usuarioModel";

export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json({ usuarios });
  } catch (error: any) {
    res.status(500).json({ msg: `Error al intentar buscar los usuarios`, error });
  }
};

export const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const usuarios = await Usuario.findByPk(id);

    if (usuarios) {
      res.json({ usuarios });
    } else {
      res.status(404).json({ msg: `No existe un usuario con el id ${id}` });
    }
  } catch (error: any) {
    res.status(500).json({ msg: `Error al intentar buscar el usuario ${id}`, error });
  }
};

export const postUsuario = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const existeUsuario = await Usuario.findOne({ where: { nombre_usuario: body.nombre_usuario } });

    if (existeUsuario) {
      return res.status(400).json({ msg: `Ya existe el usuario: ${body.nombre_usuario}` });
    }

    const usuario = await Usuario.create(body);

    res.json({ usuario });
  } catch (error: any) {
    res.status(500).json({ msg: `Error al intentar crear el usuario ${body.nombre_usuario}`, error });
  }
};

export const putUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const usuario = await Usuario.findByPk(id);

    if (usuario) {
      usuario.set(body);
      await usuario.save();
      res.json({ usuario });
    } else {
      res.status(404).json({ msg: `No existe un usuario con el id ${id}` });
    }
  } catch (error: any) {
    res.status(500).json({ msg: `Error al intentar actualizar el usuario ${id}`, error });
  }
};

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
      res.json({ msg: `Usuario con id '${id}' ${msg}` });
    } else {
      res.status(404).json({ msg: `No existe un usuario con el id ${id}` });
    }
  } catch (error: any) {
    res.status(500).json({ msg: `Error al intentar eliminar el usuario ${id}`, error });
  }
};
