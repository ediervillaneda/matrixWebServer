import { Router } from "express";
import { check } from "express-validator";

// Middlewares
import validarCampos from "../../middlewares/validarCampos";

// Controllers
import getAseguradorasByDoc from "../../controllers/procedures/getAseguradorasByDocController";

let router = Router();

router.use(
  "/getAseguradorasByDoc",
  [
    check("documento").not().isEmpty().withMessage("El número de documento es obligatorio"),
    check("empresa").not().isEmpty().withMessage("La empresa es obligatoria"),
    validarCampos,
  ],
  getAseguradorasByDoc
);

export default router;
