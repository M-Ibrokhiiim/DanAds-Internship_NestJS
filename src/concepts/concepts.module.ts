import { Module } from "@nestjs/common";
import { ConceptualTraining } from "./concepts.controller";

@Module({
    controllers:[ ConceptualTraining, ]
})

export class Concepts {}