import {User} from "@prisma/client";
import db from "@/prisma/client";

export class UserRepository {
    public async findAll(): Promise<User[]> {
        return db.user.findMany();
    }
}