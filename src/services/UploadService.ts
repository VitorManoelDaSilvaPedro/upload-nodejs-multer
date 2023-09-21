import { Request, Response } from "express";

export const responder = (Req: Request, Res: Response) => {
    Res.json({status: true})
}