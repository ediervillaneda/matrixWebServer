import { Request, Response } from "express";
import generarJWT from "../helpers/generarJWT";
import Usuario from "../models/permisos/usuarioModel";
const Sequelize = require("sequelize");

const bcrypt = require("bcryptjs");

const login = async (req: Request, res: Response) => {
  const { nombre_usuario, contrasena } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { nombre_usuario, estado_usuario: 1 } });

    if (usuario) {
      let uPass = usuario.getDataValue("contrasena");
      let usuarioId = usuario.getDataValue("id");

      if (bcrypt.compareSync(contrasena, uPass)) {
        const token_sesion = await generarJWT(usuarioId);
        if (token_sesion) {
          await usuario.update({
            ultimo_ingreso: Sequelize.fn("NOW"),
            token_sesion,
          });

          res.json({ usuarioId, token_sesion });
        } else {
          res.status(500).json({ msg: `Error al intentar generar el token`, error:true });
        }
      } else {
        res.status(401).json({ msg: "Password incorrecto", error:true });
      }
    } else {
      res.status(401).json({ msg: "Usuario no encontrado", error:true });
    }
  } catch (debug) {
    res.status(401).json({ msg: "Error al intentar loguearse", error:true, debug });
  }
};

export default login;
