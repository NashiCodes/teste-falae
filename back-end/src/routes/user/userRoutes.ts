import {Router} from "express";
import {userController} from "@/controllers/User/userController";

const userRoutes = Router({mergeParams: true});

userRoutes.post("/register", userController.registerUser);

export default userRoutes;