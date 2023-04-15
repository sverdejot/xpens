
import { writeFile, readFile, unlink } from "fs/promises";
import { globSync } from "glob";
import { deserialize, serialize } from "v8";
import { UUID } from "../../../Shared/domain/value-object/UUID";
import { Expense } from "../../domain/Expense";
import { ExpenseRepository } from "../../domain/ExpenseRepository";

export class FileExpenseRepository implements ExpenseRepository {
    private FILE_PATH = `${__dirname}`

    async save(expense: Expense): Promise<void> {
        writeFile(`${this.FILE_PATH}/${expense.id.value}.repo`, serialize(expense))
    }

    async search(expenseId: UUID): Promise<Expense|null> {
        const expenseData = await readFile(`${this.FILE_PATH}/${expenseId.value}.repo`)
        const { id, description, amount, currency, date} = deserialize(expenseData);

        return new Expense(id, description, amount, currency, date)
    }

    async removeAll(): Promise<void> {
        const files = globSync(`${__dirname}/**/*.repo`);
        files.forEach((file) => unlink(file));
    }
}