import { Request, Response, Router } from "express";
import { HealthGETController } from '../controllers/HealthGETController'
import container from "../dependency-injection";

export const register = (router: Router) => {
    const controller: HealthGETController = container.get('Apps.expense.controllers.HealthGETController');
    router.get('/status', (req: Request, res: Response) => controller.run(req, res));
};