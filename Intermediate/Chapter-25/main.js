// const obj  = {
//     name:"Suryakanta Sahu",
//     greet : function(age){
//         console.log(`${this.name} age is ${age}.`);
//     }
// }

// const person1 = {
//     name:"Ajay"
// }

// const person2 = {
//     name:"Anisha"
// }

// obj.greet(20)

// obj.greet.call(person1,23);
// obj.greet.apply(person2,[18]);

// const nums = [45,32,67,54,10,3]

// console.log(Math.max.apply(null,nums));



function greet(){
    console.log(this.name);
    
}


const obj = {
    name:"Surya"
}

const bindValue = greet.bind(obj);

bindValue()


