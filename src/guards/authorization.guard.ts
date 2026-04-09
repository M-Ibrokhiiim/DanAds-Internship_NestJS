import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";

@Injectable()
export class AuthorizeUser implements CanActivate {
    canActivate(context: ExecutionContext ): boolean {
        const request = context.switchToHttp().getRequest()

        if(!request.headers.authorization) {
            throw new ForbiddenException("Client was not  authenticated!")
        }
        
        return  true
    }
}