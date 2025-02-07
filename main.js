import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import todoRoutes from "./routes/route.js";
// import authRoutes from "./routes/authRoute.js"  // Use import for ES Modules
// import pool from "./database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',  // Allow requests from your frontend
    credentials: true,  // Allow cookies and authorization headers
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

app.use(express.json()); // Enable JSON parsing

// Register Routes
app.use("/api", todoRoutes); // Prefix all routes with `/api`
// app.use('/api/auth', authRoutes);
// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
