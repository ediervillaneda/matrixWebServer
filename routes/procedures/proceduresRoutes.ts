import { Router } from "express";
import { check } from "express-validator";

// Middlewares
import validarCampos from "../../middlewares/validarCampos";

// Controllers
import getAseguradorasByDoc from "../../controllers/procedures/getAseguradorasByDocController";
import medidasAntropometricas from "../../controllers/procedures/medidasAntropometricasController";

let router = Router();

router.get(
  "/getAseguradorasByDoc",
  [
    check("documento").not().isEmpty().withMessage("El número de documento es obligatorio"),
    check("empresa").not().isEmpty().withMessage("La empresa es obligatoria"),
    validarCampos,
  ],
  getAseguradorasByDoc
);

router.get(
  "/getMedidasAntropometricas",
  [check("historia").not().isEmpty().withMessage("El número de historia es obligatoria"), validarCampos],
  medidasAntropometricas
);

export default router;
