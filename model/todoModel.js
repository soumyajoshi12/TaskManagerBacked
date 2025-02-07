import pool from "../database.js"; // Import the pool instance

export const createTodo = async (title, description, status,email) => {
  try {
    const result = await pool.query(
      "INSERT INTO todoTask (title, description, status, email) VALUES ($1, $2, $3,$4) RETURNING *",
      [title, description, status,email]
    );
    return result;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw new Error("Unable to create todo");
  }
};

export const getTodos = async (email, status) => {
    try {
      let query = "SELECT * FROM todotask WHERE email = $1";
      let values = [email];
  
      if (status) {
        query += (` AND status = $${values.length + 1}`);
        values.push(status);
      }
  
      const result = await pool.query(query, values);
      return result.rows; // Return only the fetched rows
    } catch (error) {
      console.error("Error fetching todos:", error);
      throw new Error("Unable to fetch todos");
    }
  };
  


export const updateTodo = async (id, updatedData) => {
  try {
    const fields = Object.keys(updatedData);
    const values = Object.values(updatedData);

    const setClause = fields
      .map((field, index) => `${field} = $${index + 1}`)
      .join(", ");
    const query = `UPDATE todoTask SET ${setClause} WHERE id = $${
      fields.length + 1
    } RETURNING *`;

    const result = await pool.query(query, [...values, id]);

    return result.rows[0];
  } catch (error) {
    console.error("Error updating todo:", error);
    throw new Error("Unable to update todo");
  }
};

export const deleteTodo = async (id) => {
  try {
    return await pool.query("DELETE FROM todoTask WHERE id = $1 RETURNING *", [
      id,
    ]);
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw new Error("Unable to delete todo");
  }
};
