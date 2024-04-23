import { Router } from "express";
import { DeporteController } from "../controller/beisbol.controller.js";
const router = Router();

const deporte = new DeporteController();
router.post("/", deporte.Crear);
router.get("/", deporte.GetAll);
router.put("/:id", deporte.Update);
router.delete("/:id", deporte.Delete);

export default router;
