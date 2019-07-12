import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'
import { User } from './interfaces/user.interface'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll(): User[] {
        return this.usersService.findAll();
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): string {
        return `First name: ${createUserDto.first_name} Last name: ${createUserDto.last_name}`;
    }
}
