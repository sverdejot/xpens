import { ExpenseApp } from './ExpenseApp';

try {
    new ExpenseApp().start();
} catch (ex) {
    console.log(ex);
    process.exit(0);
}

process.on('uncaughtException', err => {
    console.log('uncaughtException', err);
    process.exit(1);
})