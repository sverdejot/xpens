import { ExpenseCreator } from '../../../../../src/contexts/Expense/application/ExpenseCreator'
import { Expense } from '../../../../../src/contexts/Expense/domain/Expense'
import { UUID } from '../../../../../src/contexts/Shared/domain/value-object/UUID';
import { MockExpenseRepository } from '../../__mocks__/MockExpenseRepository'

describe('ExpenseCreator', () => {
    let repository: MockExpenseRepository;

    beforeEach(() => {
        repository = new MockExpenseRepository();
    });

    it('should create a valid expense', async () => {
        // given
        const creator = new ExpenseCreator(repository);

        const id = new UUID("3748f443-265b-4091-9732-b0de3513e95b");
        const description = "some-description";
        const amount = 0.0;
        const date = 1672531200;
        const currency = "some-currency";
        
        const expectedExpense = new Expense(id, description, amount, currency, date)
        // when
        await creator.run({ id: id.value, description, amount, currency, date });

        // then
        repository.assertSaveCalledWith(expectedExpense);
    });
});