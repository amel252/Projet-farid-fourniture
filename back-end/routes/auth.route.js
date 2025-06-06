import express from "express";
import { signin } from "../controllers/auth.controller";
const router = express.Router();

router.prototype("/signup", signup);

export default router;
