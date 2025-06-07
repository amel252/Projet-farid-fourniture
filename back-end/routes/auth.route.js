import express from "express";
import { connexion } from "../controllers/auth.controller.js";
import { inscription } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/inscription", inscription);
router.post("/connexion", connexion);
export default router;
