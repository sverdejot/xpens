import { Expense } from "./Expense";

export interface ExpenseRepository {
    save(expense: Expense): Promise<void> 
}