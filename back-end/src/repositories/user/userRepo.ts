import db from "@/prisma/client";
import {UserDtoRequest} from "@/models/user/userDto";
import {User} from "@prisma/client";


const create = async (user: UserDtoRequest): Promise<User> => {

    await existEmail(user.email);

    return db.user.create({
        data: user
    });

}

const getAll = async (): Promise<User[]> => {
    return db.user.findMany();
}

const existEmail = async (email: string) => {
    const regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
    if (!regex.test(email)) throw new Error('Invalid email');

    const user = await db.user.findUnique({
        where: {email}
    });

    if (user) throw new Error('Email already exists');

}
export const userRepository = {
    create,
    getAll
}