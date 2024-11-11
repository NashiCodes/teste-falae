import { Request, Response } from 'express';
import {UserService} from "@/services/user/userServices";

export class UserController {
    public userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async getUsers(req: Request, res: Response): Promise<void> {
        const users = await this.userService.getAllUsers();
        //return as array of users
        res.status(200).json(users);
    }
}