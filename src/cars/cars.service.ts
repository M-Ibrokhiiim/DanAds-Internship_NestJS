import { Injectable } from "@nestjs/common";

@Injectable()
 
export class CarsDependencies { 
    AllCars(){
        return 'All cars are here!'
    }

    NewCar(){
        return 'New cars added to DB!'
    }

    UpdateCar(){
        return 'Car updated!'
    }

    RemoveCar(){
        return 'Car deleted!'
    }
}