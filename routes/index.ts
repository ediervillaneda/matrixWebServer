import { Router } from "express";

// Importar controladores
import applicationRoute from "./aplicacionRoutes";
import authRoutes from "./authRoutes";
import cliameRoutes from "./cliame/cliameRoutes";
import permisosRoutes from "./permisos/permisosRoutes";
import proceduresRoutes from "./procedures/proceduresRoutes";

// Importar middlewares
import validarJWS from "../middlewares/validarJWS";

let router = Router();

//Implementar rutas de autenticación, usuarios y cualquier otro middleware, que se desee usar en todas las rutas.
// ejemplo. router.use('/tura', middleware_function, controller_function);

router.use("/login", authRoutes);
router.use("/usuarios", [validarJWS], permisosRoutes);
router.use("/aplicacion",[validarJWS],applicationRoute);

// Tablas Cliame
router.use("/cliame", [validarJWS], cliameRoutes);

// Procedimientos Almacenados
router.use("/procedure", [validarJWS], proceduresRoutes);

// Export the router
export = router;
