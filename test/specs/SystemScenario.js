import RegisterPage from "../pageobjects/RegisterPage.js";
import HomePage from "../pageobjects/HomePage.js";
import LoginPage from "../pageobjects/LoginPage.js";
import ProductPage from "../pageobjects/ProductPage.js";
import AddressPage from "../pageobjects/AddressPage.js";
import OrderPage from "../pageobjects/OrderPage.js";

let email="1234abc567@gmail.com"
describe("System Test Case",()=>{
    it.skip("register",async()=>{
        await browser.url("https://demowebshop.tricentis.com/")
        await browser.maximizeWindow()
        await HomePage.registerlnk.click()
        await RegisterPage.register("abc","def","1234abc567@gmail.com","abc@1234")
        await browser.pause(2000)
        await RegisterPage.continuebtn.isDisplayed()
    }),
    it("login",async()=>{
        
        await browser.url("https://demowebshop.tricentis.com/")
        await browser.maximizeWindow()
        await HomePage.loginlnk.click()
        await LoginPage.login(email,"abc@1234")
        await browser.pause(2000)
        await expect(browser).toHaveUrl("https://demowebshop.tricentis.com/")
        let l=await browser.$("//a[contains(text(),'"+email+"')]")
        let ref=$(l)
        await expect(ref).toHaveText(email)  
      //  await browser.scroll(0,600)    
    })
    ,
    it("add to cart",async()=>{
        await browser.scroll(0,500)
        let qty=2
        if(await LoginPage.productlink.isDisplayed())
        {
            await LoginPage.productlink.click()
            await ProductPage.addtocart()
            await browser.pause(2000)
        }
        let r=$(await browser.$("//span[text()='(2)']"))
        await expect(r).toHaveText("(2)") 
        await HomePage.cartlnk.click()
        if(await ProductPage.termsofservice.isClickable())
        {
            await ProductPage.termsofservice.click()
            await ProductPage.checkoutbtn.click()
        }
        await browser.pause(4000)
    }),
    it("confirm order",async()=>{
       await AddressPage.enteraddress()
       await OrderPage.orderdetails()
       let cntxt=await OrderPage.ordercnfmtxt.getText()
       let ono=await OrderPage.ordernotxt.getText()
       console.log(cntxt);
       console.log(ono);
       
        await browser.pause(3000)

    })

})