import { Router } from "express";
import { check } from "express-validator";
import { getGrupos } from "../../controllers/permisos/gruposController";
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario, validateUser } from "../../controllers/permisos/usuariosController";
import validarCampos from "../../middlewares/validarCampos";

const router = Router();

router.get("/", getUsuarios);
router.get("/getOne", getUsuario);
router.get(
  "/validateUser",
  [
    check("nombre_usuario", "El usuario no puede estar vacio").notEmpty(),
    check("contrasena", "La contraseña no debe estar vacia").notEmpty(),
    validarCampos,
  ],
  validateUser
);
router.post(
  "/create",
  [
    check("contrasena", "La contraseña no debe estar vacia").notEmpty(),
    check("contrasena", "La contraseña debe tener al menos 6 caracteres").isLength({ min: 6, max: 20 }),
    validarCampos,
  ],
  postUsuario
);
router.put("/update/:id", putUsuario);
router.delete("/delete/:id", deleteUsuario);

router.get("/getGrupos", [check("idUsuario", "El ID del usuario no puede estar vacio").notEmpty()], getGrupos);

export default router;
