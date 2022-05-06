import { Router } from "express";
import { check } from "express-validator";

import { deleteUsuario, getUsuario, getUsuarioByNom, getUsuarios, postUsuario, putUsuario } from "../controllers/usuariosController";
import validarCampos from "../middlewares/validarCampos";
import validarJWS from "../middlewares/validarJWS";

const router = Router();

router.use(validarCampos);
router.use(validarJWS);

router.get("/", getUsuarios);
router.get("/getOne", getUsuario, [validarJWS]);
router.post("/create", postUsuario, [
  check("contraseña", "La contraseña debe tener al menos un numero").notEmpty(),
  check("constraseña", "La contraseña debe tener al menos 6 caracteres").isLength({ min: 6 }),
  validarCampos,
  validarJWS,
]);
router.put("/update/:id", putUsuario);
router.delete("/delete/:id", deleteUsuario);

export default router;
