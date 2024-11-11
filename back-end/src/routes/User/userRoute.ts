import {Router} from "express";
import {UserController} from "@/controllers/User/userController";

const userRoute = Router({mergeParams: true});
const userController = new UserController();

userRoute.get("/", userController.getUsers);

export default userRoute;