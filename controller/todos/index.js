// create todo

import pool from "../../database";

export const createTodoTask = async (req , res) => {
    try {
        const {description} = req.body;
        const newTask = await pool.query("INSERT INTO todoTask (description) Values($1)", [description])
        res.json(newTask)
    } catch (error) {
        console.error(error.message)
    }
}