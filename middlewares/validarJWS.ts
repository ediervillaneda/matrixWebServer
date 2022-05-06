import { Request, Response, NextFunction } from "express";

const jwt = require("jsonwebtoken");

import Usuario from "../models/usuarioModel";

const validarJWS = async (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.header("Authorization");

  if (!authorization) {
    return res.status(401).json({ msg: "No hay token en la peticion" });
  }

  try {
    const decoded = jwt.verify(authorization, process.env.JWT_SECRET);

    const usuario = await Usuario.findByPk(decoded.uid);

    console.log(usuario);

    if (!usuario) {
      return res.status(401).json({ msg: "El `Token` no es válido o ha sido revocado" });
    }

    if (!usuario.getDataValue("estado_usuario")) {
      return res.status(401).json({ msg: "Usuario inactivo" });
    }

    next();
  } catch (error) {
    res.status(500).json({ msg: "Error al validar el token", error });
  }
};

export default validarJWS;
