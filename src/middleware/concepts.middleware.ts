import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()

export class ConceptsRequestChecker implements NestMiddleware {
    use(req: Request, res: Response, next:NextFunction) {
        if(req.headers['content-type'] == 'application/json'){
          console.log(req.body)            
        return res.status(403).json({msg: 'Bro try later again!', err: 'You are forbidden by Server!', statusCode: 403})
        } 
       
        next()
    }
}