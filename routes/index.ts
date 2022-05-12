import { Router } from "express";

// import sub-routers
import userRoutes from "../routes/usuarioRoutes";
import authRoutes from "../routes/authRoutes";
import cliameRoutes from "./cliame/cliameRoutes";


let router = Router();

// mount express paths, any addition middleware can be added as well.
// ex. router.use('/pathway', middleware_function, sub-router);

router.use("/login", authRoutes);
router.use("/usuarios", userRoutes);

// Tablas Cliame
router.use("/cliame", cliameRoutes);

// Export the router
export = router;
