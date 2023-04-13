import { ExpenseCreator } from '../../../../../src/contexts/Expense/application/ExpenseCreator'
import { Expense } from '../../../../../src/contexts/Expense/domain/Expense'
import { MockExpenseRepository } from '../../__mocks__/MockExpenseRepository'

describe('ExpenseCreator', () => {
    let repository: MockExpenseRepository;

    beforeEach(() => {
        repository = new MockExpenseRepository();
    });

    it('should create a valid expense', async() => {
        // given
        const creator = new ExpenseCreator(repository);

        const id            = "id";
        const description   = "description";
        const amount        = 0.0;
        const date          = 1672531200;
        const currency      = "EUR";

        const expectedExpense = new Expense(id, description, amount, currency, date)

        // when
        await creator.run(id, description, amount, currency, date);

        // then
        repository.assertSaveCalledWith(expectedExpense);
    });
});