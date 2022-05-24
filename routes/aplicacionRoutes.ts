import { Router } from "express";
import { check } from "express-validator";

import { getAplicaciones } from "../controllers/aplicacionControllers";
import validarCampos from "../middlewares/validarCampos";
import validarJWS from "../middlewares/validarJWS";

const router = Router();

router.get("/",getAplicaciones);

export default router;

