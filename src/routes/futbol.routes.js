import { Router } from "express";
import { FutbolController } from "../controller/futbol.controller.js";
const router = Router();

const futbol = new FutbolController();
router.post("/", futbol.Create);
router.get("/", futbol.Read);
router.put("/:id", futbol.Update);
router.delete("/:id", futbol.Delete);

export default router;