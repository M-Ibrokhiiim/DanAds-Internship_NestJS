import { Injectable, NotFoundException} from "@nestjs/common";
import { ReturnCreatedUserDTO } from "./dto/back-user.dto";
import { plainToInstance } from "class-transformer"
import { UdatedUserDTO } from "./dto/updated-user.dto"
import { ReturnUsersInfo } from "./dto/all-users.dto";
import { NotFound } from "../utils/notFound";
import { PostUserDTO } from './dto/posted-user.dto'
 
@Injectable()
export class conceptsActions {
    private data = [
            {
                id: 1,
                name: 'Ali',
                surname: 'Karimov',
                nickname: 'ali_dev',
                password: 'pass123',
                age: 25,
            },
            {
                id: 2,
                name: 'John',
                surname: 'Doe',
                nickname: 'johnny',
                password: 'secret456',
                age: 30,
            },
            {
                id: 3,
                name: 'Sara',
                surname: 'Smith',
                nickname: 'sara_s',
                password: 'qwerty789',
                age: 22,
            },
            {
                id: 4,
                name: 'Michael',
                surname: 'Brown',
                nickname: 'mike_b',
                password: 'pass999',
                age: 35,
            },
            {
                id: 5,
                name: 'Emma',
                surname: 'Wilson',
                nickname: 'emma_w',
                password: 'emma123',
                age: 28,
            },
        ];


    // POST
    CreateNewUser(user) {
        const newUser = { 
           id:this.data.length + 1, 
           name:user.name, 
           surname:user.surname, 
           nickname:user.nickname, 
           password:user.password, 
           age:user.age
        }  

        this.data.push(newUser)

        const createdUser  =  plainToInstance(ReturnCreatedUserDTO, newUser, { excludeExtraneousValues:true })

        return { user:createdUser ,msg:'User successfully created', statusCode:201 }
    }
  
    // GET
    GetUsers() {
        const users =this.data.map(user => plainToInstance(ReturnUsersInfo,user, {excludeExtraneousValues: true})) 
         
        return users.sort((a,b) => a.id - b.id)
    }    

    // PUT
    UpdateUser(id:number, user) {
        NotFound(id, this.data)

        this.data = this.data.filter(user => { return  user.id !== id})
        this.data.push(user)
        
        const updatedUser = plainToInstance(UdatedUserDTO, user, { excludeExtraneousValues: true })
        return { updatedUser,  msg: 'User successfully updated!', statusCode:200 }
    }

    // DELETE
    RemoveUser(id:number) {
        NotFound(id, this.data)
        this.data = this.data.filter(user => {return  user.id !== id })

        return { msg:'User successfully deleted!', statusCode:200 }
    }
    

    // Practice

    // POST
    PostUser (user) {
        const newUser = plainToInstance(PostUserDTO, user, { excludeExtraneousValues: true})

        return {newUser, statusCode: 201}
    }
}