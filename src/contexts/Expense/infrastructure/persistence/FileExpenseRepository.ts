import { writeFile, readFile } from "fs/promises";
import { deserialize, serialize } from "v8";
import { Expense } from "../../domain/Expense";
import { ExpenseRepository } from "../../domain/ExpenseRepository";

export class FileExpenseRepository implements ExpenseRepository {
    private FILE_PATH = `${__dirname}`

    async save(expense: Expense): Promise<void> {
        writeFile(`${this.FILE_PATH}/${expense.id}.repo`, serialize(expense))
    }

    async search(expenseId: string): Promise<Expense|null> {
        const expenseData = await readFile(`${this.FILE_PATH}/${expenseId}.repo`)
        const { id, description, amount, currency, date} = deserialize(expenseData);

        return new Expense(id, description, amount, currency, date)
    }
}