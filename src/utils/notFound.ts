import { NotFoundException } from "@nestjs/common"

export const NotFound = (id:number, users:any) => {
    const isExist = users.filter((user: any) => { return user.id === id})

        if(isExist.length === 0) {
            throw new NotFoundException(`Sorry, ${id} id took user not found.`)
        }
}
