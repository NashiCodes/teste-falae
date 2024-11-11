import {UserRepository} from "@/repositories/user/userRepo";
import {User} from "@prisma/client";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async getAllUsers(): Promise<User[]> {
        return this.userRepository.findAll();
    }

}