import { UUID } from "../../Shared/domain/value-object/UUID";
import { Expense } from "../domain/Expense";
import { ExpenseRepository } from "../domain/ExpenseRepository";
import { ExpenseCreatorRequest } from "./ExpenseCreatorRequest";

export class ExpenseCreator {
    private readonly repository: ExpenseRepository

    constructor(repository: ExpenseRepository) {
        this.repository = repository
    }

    async run(request: ExpenseCreatorRequest) {
        const expense = new Expense(new UUID(request.id), request.description, request.amount, request.currency, request.date);

        return this.repository.save(expense);
    }
}