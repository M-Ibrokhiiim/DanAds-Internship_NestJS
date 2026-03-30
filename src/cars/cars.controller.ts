import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { CarsDependencies } from "./cars.service";

@Controller('/cars')

export class CarsActions{

    constructor(private Actions:CarsDependencies ){}

    @Get('/all')
        AllCars(){
         return  this.Actions.AllCars()
        }

    @Post('/newCar')
       PostNewCar(){
        return  this.Actions.NewCar()
       }
    
    @Put('/car')
      UpdateCar(){
        return this.Actions.UpdateCar()
      }
     
    @Delete('/remove/1')
       RemoveCar(){
        return this.Actions.RemoveCar()
      }

}