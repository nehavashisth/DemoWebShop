class Order{
    get paymtdbtn(){
        return $("//input[@class='button-1 payment-method-next-step-button']")
    }
    get payinfobtn(){
        return $("//input[@class='button-1 payment-info-next-step-button']")
    }
    get cnfmorderbtn(){
        return $("//input[@class='button-1 confirm-order-next-step-button']")
    }
    get ordercnfmtxt(){
        return $("//div[@class='title']")
    }
    get ordernotxt(){
        return $("//ul[@class='details']")
    }
    async orderdetails(){
        await this.paymtdbtn.click()
        await this.payinfobtn.click()
        await this.cnfmorderbtn.click()
    }
}
export default new Order