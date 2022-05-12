import { Router } from "express";
import { check } from "express-validator";

// Middlewares
import validarCampos from "../../middlewares/validarCampos";

// Controllers
import cliame105 from "../../controllers/cliame/cliame105Controller";

let router = Router();

router.use("/105", [check("seltip").not().isEmpty().withMessage("El campo seltip es obligatorio"), validarCampos], cliame105);

export default router;
