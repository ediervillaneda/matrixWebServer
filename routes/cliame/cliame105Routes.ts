import { Router } from "express";
import { check } from "express-validator";
import validarCampos from "../../middlewares/validarCampos";
import cliame105 from "../../controllers/cliame/cliame105Controller";

const router = Router();

router.get("/105", cliame105);

export default router;
