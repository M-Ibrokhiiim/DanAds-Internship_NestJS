import { Injectable, NotFoundException} from "@nestjs/common";

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


    // Expection handler
    NotFoundERR(id:number){
        const isExist = this.data.filter(user => { return user.id === id})

        if(isExist.length === 0) {
            throw new NotFoundException(`Sorry, ${id} id took user not found.`)
        }
    }
    // POST
    CreateNewUser(user){
        const newUser = { 
           id:this.data.length + 1, 
           name:user.name, 
           surname:user.surname, 
           nickname:user.nickname, 
           password:user.password, 
           age:user.age
        }  
        this.data.push(newUser)
        
        return { msg:'User successfully created', statusCode:201 }
    }
  
    // GET
    GetUsers(){
        return this.data.sort((a,b) => a.id - b.id)
    }    

    // PUT
    UpdateUser(id:number, user){
        this.NotFoundERR(id)

        this.data = this.data.filter(user => { return  user.id !== id})
        this.data.push(user)
        
        return { msg: 'User successfully updated!', statusCode:200 }
    }

    // DELETE
    RemoveUser(id:number){
        this.NotFoundERR(id)
        this.data = this.data.filter(user => {return  user.id !== id })

        return { msg:'User successfully deleted!', statusCode:200 }
    }
    
}