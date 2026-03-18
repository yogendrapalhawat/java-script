class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }


}

const chai =new Teacher("chai","chai@gmaoil.com","123")
chai.addCourse()
chai.logMe()
const maslachai=new User("masalaChai")
maslachai.logMe()
console.log(chai===maslachai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);