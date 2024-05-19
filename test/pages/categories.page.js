class CategoriesPage {
    get emailInput() {
      return $('#email');
    }
  
    get passwordInput() {
      return $('#password');
    }
  
    get loginButton() {
      return $('//*[@id="root"]/div/div/div/div[2]/div/button');
    }

    get categoriesButton(){
      return $('//*[@id="root"]/div/div/div[1]/div/a[5]/div')
    }

    get tambahButton(){
      return $('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/a')
    }

    get namaInput(){
      return $('#nama')
    }

    get deskripsiInput(){
      return $('#deskripsi')
    }

    get buttonSimpan(){
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

    async categories(nama, deskripsi){
      await this.categoriesButton.click();
      await this.tambahButton.click();
      await this.namaInput.setValue(nama);
      await this.deskripsiInput.setValue(deskripsi);
      await this.buttonSimpan.click();
    }

  }
  
  module.exports = new CategoriesPage();
  