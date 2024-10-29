import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import authMiddleware from "../middlewares/AuthMiddleware.js";
import ChatGroupController from "../controllers/ChatGroupController.js";
import ChatGroupUserController from "../controllers/ChatGroupUser.js";
const router = Router();

router.post("/auth/login", AuthController.login);
router.post("/chat-group", authMiddleware, ChatGroupController.store);
router.get("/chat-group/:id", authMiddleware, ChatGroupController.show);
router.get("/chat-group", authMiddleware, ChatGroupController.index);
router.put("/chat-group/:id", authMiddleware, ChatGroupController.update);
router.delete("/chat-group/:id", authMiddleware, ChatGroupController.destroy);

// chat group users
router.get("/chat-group-users", ChatGroupUserController.index);
router.post("/chat-group-users", ChatGroupUserController.store);

export default router;
