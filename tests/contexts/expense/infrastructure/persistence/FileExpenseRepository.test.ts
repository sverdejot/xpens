import { Expense } from '../../../../../src/contexts/Expense/domain/Expense'
import { FileExpenseRepository } from '../../../../../src/contexts/Expense/infrastructure/persistence/FileExpenseRepository';


describe("FileExpenseRepository", () => {
    it("should save the expense in a file", async () => {
        // given
        // TODO: Implement ObjectMother pattern
        const expectedExpense = new Expense("id", "description", 10, "EUR", 1672531200)
        const repository = new FileExpenseRepository();

        // when
        await repository.save(expectedExpense);
         
        // then
        const expense = await repository.search("id");
        expect(expense).toEqual(expectedExpense);
    });
});