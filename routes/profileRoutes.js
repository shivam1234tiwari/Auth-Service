import express from "express";

import {
  publicInfo,
  protectedProfile,
} from "../controllers/profileController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/public/info", publicInfo);

router.get(
  "/protected/profile",
  authMiddleware,
  protectedProfile
);

export default router;