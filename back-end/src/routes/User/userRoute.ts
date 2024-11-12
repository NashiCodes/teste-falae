import {Router} from "express";
import {userController} from "@/controllers/User/userController";

const userRoute = Router({mergeParams: true});

userRoute.post("/register", userController.registerUser);

export default userRoute;