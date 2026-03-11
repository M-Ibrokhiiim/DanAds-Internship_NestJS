import { Injectable } from "@nestjs/common";
 

export interface Response {
    status: number,
    msg: string
}

export interface UsersType {
  id: number,
  name: string
}
@Injectable()
export class UserService{
    private users:UsersType[] =  [
                     {"id":1, name: 'Ibrokhiiim'},
                     {"id":2, name: 'Elshod1'},
                     {"id":3, name: 'Diyor'},
                     {"id":4, name: 'Anvar'},
                     ]
    
//  GET
   ReturnAllUsers(): UsersType[]{
    return this.users
   }
  
  ReturnUserById(id:number):UsersType[]{
    return this.users.filter(user => Number(user.id) === Number(id))
  }
// POST
   PostNewUser(name:string): Response{
    const newUser:UsersType = {id:this.users.length + 1, name: name}
    this.users.push(newUser)

    return {status:201, msg: 'User successfully created!'}
   }
   
// PUT
   UpdateUser(id:number, newName:string ):Response{
      const user:UsersType = this.users.filter(user => Number(user.id) === Number(id))[0]
      this.users = this.users.filter(user => Number(user.id) !== Number(id))
      this.users.push({id:user.id, name: newName})
      
      return {status:201, msg: 'User successfully updated!'}
   }

// DELETE
   DeleteUser(id:number):Response{
      this.users = this.users.filter(user => Number(user.id) !== Number(id))

      return {status:201, msg: 'User successfully deleted!'}
   }

}
