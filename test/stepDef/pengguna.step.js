const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const PenggunaPage = require('../pages/pengguna.page');


Given(/^I open Kasirdemo website$/, async () => {
  await PenggunaPage.open('/');
});

When(/^I login with valid credentials$/, async () => {
  await PenggunaPage.login('ramdani122299@gmail.com','123123123');
});

When(/^I should be on the dashboard page$/, async () => {
  await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
});

When(/^I click pengguna$/, async () => {
   await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
});

When(/^I fill form pengguna$/, async () => {
  await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
  await PenggunaPage.pengguna('ramdani', 'dani123123@gmail.com', '123123123')
  await PenggunaPage.pause(5000)
});

When(/^I click button simpan$/, async () => {
  await PenggunaPage.pause(5000),
  await PenggunaPage.buttonpenggunaSimpan
});


Then(/^I get alert success$/, async () => {
  await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/pengguna');
});
