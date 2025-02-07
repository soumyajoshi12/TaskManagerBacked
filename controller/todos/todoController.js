import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../../model/todoModel.js";

export const createTodoTask = async (req, res) => {
  try {
    const { formData } = req.body;

    const newTask = await createTodo(
      formData.title,
      formData.description,
      formData.status,
      formData.email
    );

    if (newTask.rows && newTask.rows.length > 0) {
      res.status(201).json(newTask.rows[0]);
    } else {
      res.status(400).json({ error: "Failed to create todo task" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTodoTasks = async (req, res) => {
  try {
    const { email, status } = req.query;
    const tasks = await getTodos(email, status);

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTodoTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const updatedTask = await updateTodo(id, { title, description, status });

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTodoTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await deleteTodo(id);
    res.status(200).json(deletedTask.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
