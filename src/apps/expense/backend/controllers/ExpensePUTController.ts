import { Request, Response } from "express";
import httpStatus from "http-status";
import { ExpenseCreator } from "../../../../contexts/Expense/application/ExpenseCreator";
import { Controller } from "./Controller";

export class ExpensePUTController implements Controller {
    creator: ExpenseCreator
    
    constructor(creator: ExpenseCreator) {
        this.creator = creator;
    };

    async run(req: Request, res: Response): Promise<void> {
        const {id, description, amount, currency, date} = req.body;

        await this.creator.run(id, description, amount, currency, date);
        
        res.status(httpStatus.CREATED).send();
    }
}