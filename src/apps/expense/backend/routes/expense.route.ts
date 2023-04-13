import { Request, Response, Router } from "express";
import { ExpensePUTController } from '../controllers/ExpensePUTController'
import container from "../dependency-injection";

export const register = (router: Router) => {
    const controller: ExpensePUTController = container.get('Apps.expense.controllers.ExpensePUTController');
    router.put('/expense/:id', (req: Request, res: Response) => controller.run(req, res));
};