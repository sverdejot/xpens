import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber';
import request from 'supertest';
import assert from 'assert';

import { ExpenseApp } from '../../../../../../src/apps/expense/backend/ExpenseApp';

let _request: request.Test;
let _response: request.Response;
let application: ExpenseApp;

Given('I send a GET request to {string}', (route: string) => {
	_request = request(application.httpServer).get(route);
});

Given('I send a PUT request to {string} with body:', (route: string, body: string) => {
	_request = request(application.httpServer)
				.put(route)
				.send(JSON.parse(body) as object);
});

Then('the response status code should be {int}', async (statusCode: number) => {
	_response = await _request.expect(statusCode);
});

Then('the response should be empty', async () => {
	assert.deepStrictEqual(_response.body, {})
});

BeforeAll(() => {
	application = new ExpenseApp();
	application.start();
});

AfterAll(() => {
	application.stop();
});