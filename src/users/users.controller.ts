import { Controller, Get, Post } from '@nestjs/common';
import { create } from 'domain';

@Controller('users')
export class UsersController {
    @Get()
    findAll(): string {
        return 'Get all users.';
    }

    @Post()
    create(): string {
        return 'Create user';
    }
}
