let student = {
    "full name":"Surya",
    age:20,
    branch:"BCA",
    greet:function(){
        console.log(this);
        console.log(`Hello ${this.name}`)
    },
    addres:{
        city:"RAsol",
        post:"Rasol",
        showAddres(){

        }
    },
}


console.log(student["full name"])

//! Methods:-

// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));

// Object.freeze(student);

// student.name = "Suryakanta Sahu"
// student.rollNO = 45;
// console.log(student);


// Object.seal(student);

// student.rollNo = 2;
// student.name = "Suryakanta Sahu"
// console.log(student);












// student.addres.showAddres();






// let obj = new Object();
// obj.day = "Chest Day";
// obj.workout = "Push";
// console.log(obj);

// obj.day = "Back Day";

// console.log(obj);


// console.log(typeof student)


// const proto = { greet() { console.log("Hi"); },name:"surya" };
// const obj = Object.create(proto);
// obj.greet(); // Hi



