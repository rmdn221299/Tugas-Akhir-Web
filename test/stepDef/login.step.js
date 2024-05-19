const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const LoginPage = require('../pages/login.page');

Given(/^I open Saucedemo website$/, async () => {
  await LoginPage.open('/');
});

When(/^I login with valid credentials$/, async () => {
  await LoginPage.login('ramdani122299@gmail.com','123123123');
});

When(/^I should be on the dashboard page$/, async () => {
  await expect(browser).toHaveUrl('kasirdemo.belajarqa.com/dashboard');
  await LoginPage.browser(3000);
});


Then(/^I logout$/, async () => {
  await expect(browser).toHaveUrl('kasirdemo.belajarqa.com');
});

When(/^I login with invalid email$/, async () => {
  await LoginPage.login('test.com ', '123456');
});

Then(/^I should see an error message$/, async () => {
  const errorMessage = await LoginPage.errorMessage;
  await expect(errorMessage).toHaveTextContaining('"email" is not allowed to be empty');
});

//Data driven test (Scenario Outline) step definitions
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
  });
