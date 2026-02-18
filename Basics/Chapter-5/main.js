// function function_name(){  //Defination
//     // COde
// }


// function woodWaala(){ //Function Defination
//     console.log("Ye lo bhai apkaa Raw Wood....");
//     return "Raw Wood"
// }

// function freeLance(str_wood){
//     // Process
//     return str_wood+".....LLL"
// }

// // woodWaala();

// const factory = woodWaala(); //Function call
// console.log(factory);
// str_wood = "Structed Wood."
// const product = freeLance(str_wood);
// console.log(product);


// console.log(add(10,5));
console.log(sub(10,5));

const add = function(num1,num2){
    return num1+num2;
}

function sub(num1,num2){
    return num1-num2;
}


const result = add(23,25);
const anotherResult = sub(10,5);

//? Arrow Function

// const mult =(num1,num2)=>( num1 * num2)
     


// console.log(mult(3,2));


function greet(name = "Ram"){
    return (`Hello, ${name}`)
    
    
}
console.log(greet("Surya"));
console.log(greet());




