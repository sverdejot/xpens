Feature: Create Expense
    In order to track my expenses
    As a user
    I want to be able to create new expenses

    Scenario: Create new expense
        Given I send a PUT request to "/expense/5559bd9a-8c6d-43ff-a49a-2d0ec00a441f" with body:
        """
        {
            "description": "Groceries",
            "amount": "14.99",
            "currency": "EUR",
            "date": 1672531200
        }
        """
        Then the response status code should be 201
        And the response should be empty