import { Request, Response } from "express";
import generarJWT from "../helpers/generarJWT";
import Usuario from "../models/usuarioModel";
const Sequelize = require("sequelize");

const bcrypt = require("bcryptjs");

const login = async (req: Request, res: Response) => {
  const { nombre_usuario, contrasena } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { nombre_usuario } });

    if (usuario) {
      let uPass = usuario.getDataValue("contrasena");

      if (bcrypt.compareSync(contrasena, uPass)) {
        const token_sesion = await generarJWT(usuario.getDataValue("id"));

        await usuario.update({
          ultimo_ingreso: Sequelize.fn("NOW"),
          token_sesion,
        });

        res.json({ token_sesion });
      } else {
        res.status(401).json({ msg: "Password incorrecto" });
      }
    } else {
      res.status(401).json({ msg: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error al intentar loguearse", error });
  }
};

export default login;
