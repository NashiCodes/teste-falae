import db from "@/prisma/client";
import {UserDtoRequest} from "@/models/user/userDto";
import {User} from "@prisma/client";


const create = async (user: UserDtoRequest): Promise<User> => {

    if (user.name === '') throw new Error('Name is required');
    if (user.email === '') throw new Error('Email is required');
    if (user.address === '') throw new Error('Address is required');
    if (await existEmail(user.email)) throw new Error('Email already exists');

    return db.user.create({
        data: user
    });

}

const existEmail = async (email: string): Promise<boolean> => {

    const user = await db.user.findUnique({
        where: {email}
    });

    return !!user;
}
export const userRepository = {
    create,
}