class Product{
get qtytxt(){
    return $("input#addtocart_31_EnteredQuantity")
}
get cartbtn(){
    return $("input#add-to-cart-button-31")
}
get termsofservice(){
    return $("//input[@id='termsofservice']")
}
get checkoutbtn(){
    return $("button#checkout")
}
async addtocart(){
    await this.qtytxt.setValue(2)
    await this.cartbtn.click()
}
}
export default new Product
