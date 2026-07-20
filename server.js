import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import publicRoutes from "./routes/publicRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

// Auth Routes
app.use("/auth", authRoutes);

// Public Route
app.use("/public", publicRoutes);

// Protected Route
app.use("/protected", profileRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});