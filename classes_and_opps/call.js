function SetUserName(username){
    // complex DB call
    this.username=username
    console.log("called");
    

}
function craeteUser(username,email,password){
   SetUserName.call(this,username)
    this.email=email
    this.password=password
}
const chai=new craeteUser("chai","chai@gmail.com","123")
console.log(chai);
