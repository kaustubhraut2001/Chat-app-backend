import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import authMiddleware from "../middlewares/AuthMiddleware.js";
import ChatGroupController from "../controllers/ChatGroupController.js";
const router = Router();

router.post("/auth/login", AuthController.login);
router.post("/chat-group", authMiddleware, ChatGroupController.store);
router.get("/chat-group/:id", authMiddleware, ChatGroupController.show);
router.get("/chat-group", authMiddleware, ChatGroupController.index);

export default router;
