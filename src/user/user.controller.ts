import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(
        @Body() createUserDto: { name: string; email: string },
    ): Promise<User> {
        const { name, email } = createUserDto;
        return this.userService.createUser(name, email);
    }

    @Get(':email')
    async findUserByEmail(@Param('email') email: string): Promise<User> {
        return this.userService.findUserByEmail(email);
    }
}
