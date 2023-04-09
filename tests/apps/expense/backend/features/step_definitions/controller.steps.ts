import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber';
import request from 'supertest';

import { ExpenseApp } from '../../../../../../src/apps/expense/backend/ExpenseApp';

let _request: request.Test;
let application: ExpenseApp;

Given('I send a GET request to {string}', (route: string) => {
	_request = request(application.httpServer).get(route);
});

Then('the response status code should be {int}', async (statusCode: number) => {
	await _request.expect(statusCode);
});

BeforeAll(() => {
	application = new ExpenseApp();
	application.start();
});

AfterAll(() => {
	application.stop();
});