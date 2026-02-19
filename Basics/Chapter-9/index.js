// let obj1= {
//     firstName:"Suryaknata",
//     lastName:"Sahu",
//     greet(){
//         console.log(`Hello ${this.firstName} ${this.lastName}`);
        
//     }
// }

// let obj2 = {
//     firstName:"ashman",
//     lastName:"Das",
// }

// obj2.__proto__ = null;

// obj1.greet();
// console.log(obj2.toString())



let arr = [5,6,7,8];

Array.prototype.greet = function(){
    console.log("Hello");
}

Object.prototype.hack = function(){
    console.log("JS Hacked !!!");
    
}

arr.hack()

let str = "hello"

str.hack();

