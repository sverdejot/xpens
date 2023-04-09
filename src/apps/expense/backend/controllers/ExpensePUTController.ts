import { Request, Response } from "express";
import { Controller } from "./Controller";

export class ExpensePUTController implements Controller {
    async run(req: Request, res: Response): Promise<void> {
        res.status(201).send();
    }
}