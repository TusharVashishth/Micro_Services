import { Router } from "express";
import PostRoutes from "./postRoutes.js";
const router = Router();

router.use("/api", PostRoutes);

export default router;
