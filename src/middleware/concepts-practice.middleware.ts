import { Injectable, NestMiddleware } from "@nestjs/common"
import { NextFunction, Request, Response } from "express"


@Injectable()
export class PracticeMiddlewar implements NestMiddleware {
    use(req: Request, res: Response, next:NextFunction) {
        if(req.body) {
            return res.status(200).json({msg: 'You are sending data to server!'})
        }
        
        next()
    }
}