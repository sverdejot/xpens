import { Expense } from "../domain/Expense";
import { ExpenseRepository } from "../domain/ExpenseRepository";

export class ExpenseCreator {
    repository: ExpenseRepository

    constructor(repository: ExpenseRepository) {
        this.repository = repository
    }

    async run(id: string, description: string, amount: number, currency: string, date: number) {
        const expense = new Expense(
            id, description, amount, currency, date
        )

        return this.repository.save(expense);
    }
}