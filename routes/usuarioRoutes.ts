import { Router } from "express";
import { check } from "express-validator";
import { getUsuarios, getUsuario, postUsuario, putUsuario, deleteUsuario } from "../controllers/usuariosController";
import validarCampos from "../middlewares/validar-campos";

const router = Router();

router.get("/", getUsuarios);
router.get("/:id", getUsuario);
router.post("/", postUsuario, [
  check("contraseña", "La contraseña debe tener al menos un numero").notEmpty(),
  check("constraseña", "La contraseña debe tener al menos 6 caracteres").isLength({ min: 6 }),
  validarCampos,
]);
router.put("/:id", putUsuario);
router.delete("/:id", deleteUsuario);

export default router;
