import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    async createUser(name: string, email: string): Promise<User> {
        const user = this.userRepository.create({ name, email });
        return this.userRepository.save(user);
    }

    async findUserByEmail(email: string): Promise<User> {
        return this.userRepository.findByEmail(email);
    }
}
