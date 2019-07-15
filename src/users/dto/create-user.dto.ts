import { IsNotEmpty, Length, IsInt, Min, IsString } from 'class-validator';

export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    @Length(7, 20)
    readonly first_name: string;

    @IsNotEmpty()
    @IsString()
    @Length(7, 20)
    readonly last_name: string;

    readonly nickname: string;

    @IsInt()
    @Min(18, {
        message: "Have not reached age limit for registration!"
    })
    readonly age: number;

    @IsNotEmpty()
    @IsString()
    readonly gender: string;

    @IsNotEmpty()
    @IsString()
    readonly country: string;

    @IsNotEmpty()
    @IsString()
    readonly address: string; 
}