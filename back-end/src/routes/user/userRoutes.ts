import {Router} from "express";
import {userController} from "@/controllers/User/userController";

const userRoutes = Router({mergeParams: true});

userRoutes.post("/register", userController.registerUser);

userRoutes.get("/", userController.getAllUsers);

export default userRoutes;