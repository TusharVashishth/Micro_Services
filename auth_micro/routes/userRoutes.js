import { Router } from "express";
import UserController from "../controller/UserController.js";

const router = Router();

router.get("/getUser/:id", UserController.getUser);
router.post("/getUsers", UserController.getUsers);

export default router;
