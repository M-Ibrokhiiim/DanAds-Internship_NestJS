import { Body, Controller, Get, Param, Post } from "@nestjs/common";

@Controller('sellers')
export class Sellers{
    private sellers: {id:number, name:string}[] = [
        {id:1, name:"Ibrokhiiim"}
    ]

  @Get('/all')
   AllSellers(){
    return this.sellers
   }

  @Get('/seller/:id')
    GetSeller(@Param('id') id:string){
        return this.sellers.filter(seller => Number(seller.id ) === Number(id))
    }

   @Post('/newSeller')
    CreateNewSeller(@Body() body:any){
        const newSeller = {id:this.sellers.length + 1, name: body.name}
        this.sellers.push(newSeller)

        return {status:201, msg:'Seller successfully created!'}
    }
}