import bcrypt from "bcryptjs";
import pool from "../database.js";

export const registerUser = async (email, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashedPassword", hashedPassword);

    const query = "INSERT INTO users (email, password) VALUES ($1, $2)";

    console.log("email", password, email);
    const result = await pool.query(query, [email, hashedPassword]);
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("error", error);
  }
};

export const findUserByEmail = async (email) => {
  try {
    const query = "SELECT * FROM users WHERE email = $1";
    const result = await pool.query(query, [email]);
    return result.rows[0];
  } catch (error) {
    console.log("error", error);
  }
};
