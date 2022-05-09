import { Router } from "express";
import { check } from "express-validator";
import validarCampos from "../middlewares/validarCampos";
import login from "../controllers/authController";

const router = Router();

router.post(
  "/",
  [
    check("nombre_usuario", "El usuario no puede estar vacio").notEmpty(),
    check("contrasena", "La contraseña debe tener al menos un numero").notEmpty(),
    validarCampos,
  ],
  login
);

export default router;
