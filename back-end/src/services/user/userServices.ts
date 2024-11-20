import {userRepository} from "@/repositories/user/userRepo";
import {UserDtoRequest} from "@/models/user/userDto";
import {User} from "@prisma/client";

const registerUser = async (user: UserDtoRequest): Promise<User> => {

    if (user.name === '') throw new Error('Name is required');
    if (user.email === '') throw new Error('Email is required');
    if (user.address === '') throw new Error('Address is required');

    return await userRepository.create(user);
}

const getAllUsers = async (): Promise<User[]> => {
    return await userRepository.getAll();
}

export const userService = {
    registerUser,
    getAllUsers
}