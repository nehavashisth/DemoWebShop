class Login
{
get emailtxt(){
    return $("input#Email")
}
get pwdtxt(){
    return $("input#Password")
}
get loginbtn(){
    return $("//input[@value='Log in']")
}
get productlink(){
    return $("//img[@alt='Picture of 14.1-inch Laptop']")
}

async login(e,p)
{
   await this.emailtxt.setValue(e)
   await this.pwdtxt.setValue(p)
   await this.loginbtn.click()
}
}
export default new Login