import { Router } from "express";
import { authRequiered } from "../middlewares/validateToken.js";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/tasks.schema.js";

const router = Router();

router.get("/tasks", authRequiered, getTasks);

router.get("/tasks/:id", authRequiered, getTask);

router.post(
  "/tasks",
  authRequiered,
  validateSchema(createTaskSchema),
  createTask
);

router.delete("/tasks/:id", authRequiered, deleteTask);

router.put("/tasks/:id", authRequiered, updateTask);

export default router;
