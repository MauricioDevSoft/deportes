import { Router } from "express";
import { BasketController } from "../controller/basket.controller.js";

const router = Router();
const basket = new BasketController();

router.post("/", basket.Crear);
router.get("/", basket.Obtener);
router.put("/:id", basket.Actualizar);
router.delete("/:id", basket.Eliminar);

export default router;
