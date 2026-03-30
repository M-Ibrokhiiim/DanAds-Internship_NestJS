import { IsString, Min, Max, isNumber, IsNotEmpty, IsNumber} from 'class-validator'

export class NewUser {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsString()
    surname: string

    @IsString()
    nickname: string

    @IsString()
    password: string

    @IsNumber()
    @Min(1)
    @Max(85)
    age:number
    
}