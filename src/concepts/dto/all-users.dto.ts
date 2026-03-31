import { Expose } from "class-transformer";

export class ReturnUsersInfo {
    @Expose()
    id:number

    @Expose()
    name: string

    @Expose()
    surname: string

    @Expose()
    nickname: string

    @Expose()
    age: number
}