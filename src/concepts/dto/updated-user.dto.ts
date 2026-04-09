import { Expose } from "class-transformer";
import { } from "class-transformer"
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdatedUserDTO {
    @Expose()
    id: number

    @Expose()
    name: string

    @Expose()
    surname: string
} 

export class ValidateUpdatingUserDTO {
   
  @IsNotEmpty()
  @IsString()
  name: string


  @IsNotEmpty()
  @IsString()
  surname: string
}