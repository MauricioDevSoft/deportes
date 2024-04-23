import { Router } from "express";
import { AmericanoController } from "../controller/americano.controller.js";

const americano = new AmericanoController();
const router = Router();

router.post("/", americano.Crear);
router.get("/", americano.GetAll);
router.put("/:id", americano.Update);
router.delete("/:id", americano.Delete);

export default router;
