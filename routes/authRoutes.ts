import { Router } from "express";
import { check } from "express-validator";
import validarCampos from "../middlewares/validarCampos";
import login from "../controllers/authController";

const router = Router();

router.post("/", login, [
  check("contraseña", "La contraseña debe tener al menos un numero").notEmpty(),
  check("constraseña", "La contraseña debe tener al menos 6 caracteres").isLength({ min: 6 }),
  validarCampos,
]);

export default router;
