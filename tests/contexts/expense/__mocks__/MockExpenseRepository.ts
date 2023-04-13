import { Expense } from "../../../../src/contexts/Expense/domain/Expense";
import { ExpenseRepository } from "../../../../src/contexts/Expense/domain/ExpenseRepository";

export class MockExpenseRepository implements ExpenseRepository {
    private saveMock: jest.Mock;

    constructor () {
        this.saveMock = jest.fn();
    }

    async save(expense: Expense): Promise<void> {
        this.saveMock(expense);
    }

    assertSaveCalledWith(expectedExpense: Expense): void {
        expect(this.saveMock).toHaveBeenCalledWith(expectedExpense);
    }
}