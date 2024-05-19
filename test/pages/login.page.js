class LoginPage {
    get userNameInput() {
      return $('#user-name');
    }
  
    get passwordInput() {
      return $('#password');
    }
  
    get loginButton() {
      return $('#login-button');
    }
  
    get errorMessage() {
      return $('//*[@data-test="error"]');
    }
  
    async open() {
      await browser.url('https://www.saucedemo.com/');
    }
  
    async login(username, password) {
      await this.userNameInput.setValue(username);
      await this.passwordInput.setValue(password);
      await this.loginButton.click();
    }
  }
  
  module.exports = new LoginPage();
  