import { Injectable, PipeTransform, ArgumentMetadata } from "@nestjs/common";

@Injectable()

export class TransformToInt implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        console.log(value)
        return { name:value.name + "bek", surname: value.surname }
    }
}

