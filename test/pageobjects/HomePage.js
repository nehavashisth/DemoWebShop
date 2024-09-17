class Home
{
get registerlnk(){
    return $("//a[contains(text(),'Register')]")
}
get loginlnk(){
    return $("//a[contains(text(),'Log in')]")
}
get cartlnk(){
    return $("//span[contains(text(),'Shopping cart')]")
}
}
export default new Home