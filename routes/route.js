import { login, register } from "../controller/auth/authController.js";
import { createTodoTask, deleteTodoTask, getTodoTasks, updateTodoTask } from "../controller/todos/todoController.js"; // Add .js for local imports

import express from "express";

const router = express.Router();

router.post("/todos", createTodoTask);
router.get("/todos", getTodoTasks);
router.put("/todos/:id", updateTodoTask);
router.delete("/todos/:id", deleteTodoTask);
router.post('/register', register);
router.post('/login', login);

export default router;
