class PenggunaPage {
    get emailInput() {
      return $('#email');
    }
  
    get passwordInput() {
      return $('#password');
    }
  
    get loginButton() {
      return $('//*[@id="root"]/div/div/div/div[2]/div/button');
    }

    get penggunaButton(){
      return $('//*[@id="root"]/div/div/div[1]/div/a[7]/div/div/div')
    }

    get tambahpenggunaButton(){
      return $('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/a')
    }

    get namapenggunaInput(){
      return $('#nama')
    }

    get emailpenggunaInput(){
      return $('#email')
    }

    get passwordpenggunaInput(){
        return $('#password')
      }

    get buttonpenggunaSimpan(){
      return $('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/button')
    }

    async open() {
      await browser.url('https://kasirdemo.belajarqa.com/');
      await browser.maximizeWindow()  
    }

    async pause(){
      await browser.pause(5000)
    }


    async login(email, password) {
      await this.emailInput.setValue(email);
      await this.passwordInput.setValue(password);
      await this.loginButton.click();
     
    }

    async pengguna(namapengguna, emailpengguna, passwordpengguna){
      await this.penggunaButton.click();
      await this.tambahpenggunaButton.click();
      await this.namapenggunaInput.setValue(namapengguna);
      await this.emailpenggunaInput.setValue(emailpengguna);
      await this.passwordpenggunaInput.setValue(passwordpengguna);
      await this.buttonpenggunaSimpan.click();
    }

  }
  
  module.exports = new PenggunaPage();
  