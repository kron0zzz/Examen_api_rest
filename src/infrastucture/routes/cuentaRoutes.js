import { Router } from "express";
import { getCuentas, getCuentaById,createCuenta, updateCuenta, deleteCuenta} from "../controllers/cuentaController.js";

const router = Router();

router.post("/cuentas/", createCuenta);
router.get("/cuentas/", getCuentas);
router.get("/cuentas/:id", getCuentaById);
router.put("/cuentas/:id", updateCuenta);
router.delete("/cuentas/:id", deleteCuenta);

export default router;
