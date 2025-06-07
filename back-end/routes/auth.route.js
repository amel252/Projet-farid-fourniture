import express from "express";
import { signin } from "../controllers/auth.controller";
const router = express.Router();

router.post("/iscription", inscription);
router.post("/connexion", connexion);
export default router;
