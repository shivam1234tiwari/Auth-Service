import express from "express";
import dotenv from "dotenv";
import supabase from './config/supabase.js';
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/", authRoutes);
app.use("/auth",profileRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});