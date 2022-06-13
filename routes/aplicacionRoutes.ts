import { Router } from "express";

import { getAplicaciones } from "../controllers/aplicacionControllers";

const router = Router();

router.get("/",getAplicaciones);

export default router;

