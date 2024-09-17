class Register{

    get genderradiobtn(){
        return $("input#gender-female")
    }
    get firstnametxt(){
        return $("input#FirstName")
    }
    get lastnametxt(){
        return $("input#LastName")
    }
    get emailtxt(){
        return $("input#Email")
    }
    get pwdtxt(){
        return $("input#Password")
    }
    get cnpwdtxt(){
        return $("input#ConfirmPassword")
    }
    get registerbtn(){
        return $("input#register-button")
    }

    get continuebtn(){
        return $("//input[@value='Continue']")
    }

    async register(f,l,e,p){
      await this.genderradiobtn.click()
      await this.firstnametxt.setValue(f)
      await this.lastnametxt.setValue(l)
      await this.emailtxt.setValue(e)
      await this.pwdtxt.setValue(p)
      await this.cnpwdtxt.setValue(p)
       await this.registerbtn.click()
    }
}
export default new Register