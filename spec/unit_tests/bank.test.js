let Bank = require("../../src/bank");
let bank;

beforeEach(() => {
  bank = new Bank();
});

test("expects account balance to start at zero", () => {
  expect(bank.balance).toStrictEqual(0);
});

test("expect an account with no transactions to return a empty statement", () => {
  expect(bank.printStatement()).toStrictEqual(
    "date || credit || debit || balance"
  );
});

test("user makes a deposit into their account", () => {
  bank.deposit(100);
  expect(bank.balance).toBe(100);
});

test("user can make withdrawal from their account if it has money in it", () => {
  bank.deposit(100);
  bank.withdraw(50);
  expect(bank.balance).toBe(50);
});
