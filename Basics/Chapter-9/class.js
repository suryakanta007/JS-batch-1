

class Student{
    constructor(pehelaNaam,aakhirNaam){
        this.firstName = pehelaNaam;
        this.lastName = aakhirNaam;
    }

    greet(){
        
    }
}






let stu1 = new Student("Suryakanta","Sahu");
stu1.__proto__.greet= function(){
    console.log(`Hello ${this.firstName} ${this.lastName}.`)
}
let stu2 = new Student("Ajay","Dash");


stu1.greet();
// stu2.greet();

