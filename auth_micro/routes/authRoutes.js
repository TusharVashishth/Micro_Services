import { Router } from "express";
import AuthController from "../controller/AuthController.js";
import authMiddleware from "../middleware/AuthMiddleware.js";
const router = Router();

router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);

// * Private route
router.get("/auth/user", authMiddleware, AuthController.user);

export default router;
