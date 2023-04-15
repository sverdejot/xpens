/* eslint-disable camelcase */
const common = [
    '--require-module ts-node/register'
];

const expense_service = [
    ...common,
    'tests/apps/expense/backend/features/**/*.feature',
    '--require tests/apps/expense/backend/features/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
    expense_service,
};