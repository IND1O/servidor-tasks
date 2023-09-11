import { Router } from "express";
import { authRequiered } from "../middlewares/validateToken.js";

const router = Router();

router.get("/tasks", authRequiered, (req, res) => res.send("Tareas"));

export default router;
