import { Module } from "@nestjs/common";
import { ConceptualTraining } from "./concepts.controller";
import { conceptsActions } from './concepts.service'

@Module({
    controllers:[ ConceptualTraining ],
    providers: [ conceptsActions ]
})

export class Concepts {}