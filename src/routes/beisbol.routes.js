import { Router } from "express";
import { BeisbolController } from "../controller/beisbol.controller.js";

const beisbol = new BeisbolController();
const router = Router();

router.post("/", beisbol.Crear);
router.get("/", beisbol.GetAll);
router.put("/:id", beisbol.Update);
router.delete("/", beisbol.Delete);

export default router;