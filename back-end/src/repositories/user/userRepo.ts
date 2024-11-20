import db from "@/prisma/client";
import {UserDtoRequest} from "@/models/user/userDto";
import {User} from "@prisma/client";


const create = async (user: UserDtoRequest): Promise<User> => {

    if (await existEmail(user.email)) throw new Error('Email already exists');

    return db.user.create({
        data: user
    });

}

const getAll = async (): Promise<User[]> => {
    return db.user.findMany();
}

const existEmail = async (email: string): Promise<boolean> => {

    const user = await db.user.findUnique({
        where: {email}
    });

    return !!user;
}
export const userRepository = {
    create,
    getAll
}