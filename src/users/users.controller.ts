import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto'

@Controller('users')
export class UsersController {
    @Get()
    findAll(): string {
        return 'Get all users.';
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): string {
        return `First name: ${createUserDto.first_name} Last name: ${createUserDto.last_name}`;
    }
}
