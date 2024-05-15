import { Router } from "express";
import userController from "../controllers/userController";
const router = Router();

router.post("/user", userController.createUser);
router.get("/user", userController.getAllUsers);
router.get("/user/:id", userController.getUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

export default router;
