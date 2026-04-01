import { Expose } from "class-transformer";
import { IsNotEmpty, IsNumber,IsString, Max, Min } from "class-validator";
 

export class PostUserValidateDTO {
    @IsNotEmpty()
    @IsString()
     name: string

    @IsNotEmpty() 
    @IsString()
     surname: string

    @IsNumber()
    @Max(100) 
    @Min(10)
     age: number
}

export class PostUserDTO {
   @Expose()
   name: string

   @Expose()
   surname: string
}