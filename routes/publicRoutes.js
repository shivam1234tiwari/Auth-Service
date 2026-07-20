import express from "express";
import { publicInfo } from "../controllers/publicController.js";

const router = express.Router();

router.get("/info", publicInfo);

export default router;