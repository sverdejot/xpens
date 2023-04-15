import { Expense } from '../../../../../src/contexts/Expense/domain/Expense'
import { FileExpenseRepository } from '../../../../../src/contexts/Expense/infrastructure/persistence/FileExpenseRepository';
import { UUID } from '../../../../../src/contexts/Shared/domain/value-object/UUID';


describe("FileExpenseRepository", () => {
    let repository: FileExpenseRepository;

    beforeEach(async () => {
        repository = new FileExpenseRepository();
        await repository.removeAll();
    });

    it("should save the expense in a file", async () => {
        // given
        // TODO: Implement ObjectMother pattern
        const expectedExpense = new Expense(new UUID("bb417f1d-2cdb-4b0b-ad71-15db4f1e0733"), "some-description", 10, "some-currency", 1672531200)

        // when
        await repository.save(expectedExpense);
         
        // then
        const expense = await repository.search(new UUID("bb417f1d-2cdb-4b0b-ad71-15db4f1e0733"));
        expect(expense).toEqual(expectedExpense);
    });

    afterAll(async () => {
        await repository.removeAll();
    });
});