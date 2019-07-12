import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface'

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: "123123123123123123",
            first_name: "Emin",
            last_name: "Ahmadov",
            nickname: "eminahmadov",
            age: 20,
            gender: "male",
            country: "Hungary",
            address: "Galani st."
        },
        {
            id: "234234234234234234",
            first_name: "Lala",
            last_name: "Ahmadova",
            nickname: "lalaahmadova",
            age: 22,
            gender: "female",
            country: "Azerbaijan",
            address: "Geraybeyli st."
        }
    ];

    findAll(): User[] {
        return this.users;
    }
}
