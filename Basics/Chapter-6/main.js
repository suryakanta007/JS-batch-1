

// const age = 10;

// console.log(age);

// {
//  console.log("Inside the block " , age );
//  let a  = 67;
//  console.log(a);
 
// }

// console.log(a);




// function fun() {
//     console.log("INside the function ", age);
// }

// fun();



function parent(){
    const parentName = "Surya";
    const age = 45;

    return function child(){
        const childName = "Omm"
        console.log(age)
        return `My name is ${childName}, my father name is ${parentName}.`
    }
}

const result = parent()
console.log(result);

console.log(result());

// console.log(a);

// let  a = 10

