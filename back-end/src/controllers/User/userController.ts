import {Request, Response} from 'express';
import {userService} from "@/services/user/userServices";
import {UserDtoRequest} from "@/models/user/userDto";


const registerUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user: UserDtoRequest = req.body;
        const newUser = await userService.registerUser(user);
        res.status(201).json({message: 'User ' + user.name + ' created successfully'});
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
}

export const userController = {
    registerUser
}