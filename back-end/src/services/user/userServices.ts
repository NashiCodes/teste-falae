import {userRepository} from "@/repositories/user/userRepo";
import {UserDtoRequest} from "@/models/user/userDto";
import {User} from "@prisma/client";

const registerUser = async (user: UserDtoRequest): Promise<User> => {

    if (user.name === '') throw new Error('Name is required');
    if (user.email === '') throw new Error('Email is required');
    if (user.address === '') throw new Error('Address is required');

    return userRepository.create(user);
}

export const userService = {
    registerUser
}