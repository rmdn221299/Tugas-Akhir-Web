class LoginPage {
    get emailInput() {
      return $('#email');
    }
  
    get passwordInput() {
      return $('#password');
    }
  
    get loginButton() {
      return $('//*[@id="root"]/div/div/div/div[2]/div/button');
    }

    get iconProfile (){
      return $("#menu-button-35");
    }

    get iconLogout (){
      return $("menu-list-35-menuitem-33");
    }
  
    get errorMessage() {
      return $('//*[@id="root"]/div/div/div/div[2]/div/div[1]');
    }
  
    async open() {
      await browser.url('https://kasirdemo.belajarqa.com/');
      await browser.maximizeWindow();
  
      
    }

    async pause(){
      await this.pause();
    }
  
    async login(email, password) {
      await this.emailInput.setValue(email);
      await this.passwordInput.setValue(password);
      await this.loginButton.click();
      await this.iconProfile.click();
      await this.iconLogout.click();
    }

  }
  
  module.exports = new LoginPage();
  