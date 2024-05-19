const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const CategoriesPage = require('../pages/categories.page');
const categoriesPage = require('../pages/categories.page');

Given(/^I open Kasirdemo website$/, async () => {
  await CategoriesPage.open('/');
});

When(/^I login with valid credentials$/, async () => {
  await CategoriesPage.login('ramdani122299@gmail.com','123123123');
});

When(/^I should be on the dashboard page$/, async () => {
  await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
});

When(/^I click categories$/, async () => {
   await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
});

When(/^I fill form categories$/, async () => {
  await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
  await CategoriesPage.categories('dani123123', 'dani123123')
  await CategoriesPage.pause(5000)
});

When(/^I click button simpan$/, async () => {
  await CategoriesPage.pause(5000)
  await CategoriesPage.buttonSimpan
});


Then(/^I get alert success$/, async () => {
  await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/categories/create');
});
