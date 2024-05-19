const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const LoginPage = require('../pages/login.page');

Given(/^I open Saucedemo website$/, async () => {
  await LoginPage.open('/');
});

When(/^I login with valid credentials$/, async () => {
  await LoginPage.login('standard_user', 'secret_sauce');
});

Then(/^I should be on the inventory page$/, async () => {
  await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
});

When(/^I login with invalid username$/, async () => {
  await LoginPage.login('invalid_user', 'secret_sauce');
});

Then(/^I should see an error message$/, async () => {
  const errorMessage = await LoginPage.errorMessage;
  await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service');
});

//Data driven test (Scenario Outline) step definitions
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
  });
