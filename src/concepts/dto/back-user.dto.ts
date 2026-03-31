import { Expose } from "class-transformer";

export class ReturnCreatedUserDTO {     
    @Expose()
    id:number;

    @Expose()
    name: string;

    @Expose()
    surname: string;
}