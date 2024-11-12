import {userRepository} from "@/repositories/user/userRepo";
import {UserDtoRequest} from "@/models/user/userDto";
import {User} from "@prisma/client";

const registerUser = async (user: UserDtoRequest): Promise<User> => {
    return userRepository.create(user);
}

export const userService = {
    registerUser
}