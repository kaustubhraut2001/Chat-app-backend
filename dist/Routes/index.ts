import { Router } from "express";
import AuthController from "../controllers/AuthController.ts";


const router = Router();




router.post("/auth/login", AuthController.login);


export default router;