import { Expose } from "class-transformer";

export class UdatedUserDTO {
    @Expose()
    id: number

    @Expose()
    name: string

    @Expose()
    surname: string
} 