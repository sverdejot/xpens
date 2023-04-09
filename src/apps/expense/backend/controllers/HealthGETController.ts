import { Request, Response } from "express";
import { Controller } from "./Controller";

export class HealthGETController implements Controller {
    async run(req: Request, res: Response): Promise<void> {
        res.status(200).send();
    }
}