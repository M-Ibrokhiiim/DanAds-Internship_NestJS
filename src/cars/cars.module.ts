import { Module } from "@nestjs/common";
import { CarsActions } from "./cars.controller";
import { CarsDependencies } from "./cars.service";

@Module({
    controllers:[CarsActions],
    providers:[CarsDependencies]
})

export class CarsModule {}