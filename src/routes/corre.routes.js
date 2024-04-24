import { Router } from "express";
import { EmailController } from "../controller/correo.js";

const router = Router();
const correo = new EmailController()
router.post("/", correo.sendMail);

export default router;