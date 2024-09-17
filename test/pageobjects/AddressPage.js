class Address{
// get countrydd(){
//     return $("//select[@id='BillingNewAddress_CountryId']")
// }
// get citytxt(){
//     return $("//input[@id='BillingNewAddress_City']")
// }
// get addresstxt(){
//     return $("//input[@id='BillingNewAddress_Address1']")
// }
// get postaltxt(){
//     return $("//input[@id='BillingNewAddress_ZipPostalCode']")
// }
// get phnotxt(){
//     return $("//input[@id='BillingNewAddress_PhoneNumber']")
// }
get continuebtn(){
    return $("(//input[@class='button-1 new-address-next-step-button'])[1]")
}
get nextstepbtn(){
    return $("(//input[@class='button-1 new-address-next-step-button'])[2]")
}
get shippingbtn(){
    return $("//input[@class='button-1 shipping-method-next-step-button']")
}


async enteraddress(){
    await this.continuebtn.click()
    await this.nextstepbtn.click()
    await this.shippingbtn.click()
}
}
export default new Address