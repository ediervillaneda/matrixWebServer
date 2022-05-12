import { Router } from "express";
import { check } from "express-validator";

import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from "../controllers/usuariosController";
import validarCampos from "../middlewares/validarCampos";
import validarJWS from "../middlewares/validarJWS";

const router = Router();

router.get("/", getUsuarios);
router.get("/getOne", getUsuario);
router.post("/create", [check("constraseña", "La contraseña debe tener al menos 6 caracteres").isLength({ min: 8 }), validarCampos], postUsuario);
router.put("/update/:id", putUsuario);
router.delete("/delete/:id", deleteUsuario);

export default router;
