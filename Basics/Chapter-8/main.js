// let arr = [3,4,5];

// let nums = [2,3,4,5,6,7]

// arr.push(...nums);

// const removeEle = arr.pop()
// console.log(removeEle);


// console.log(arr);

// const anotheRemoveEle = arr.shift()

// console.log(anotheRemoveEle);


// console.log(arr);

// arr.unshift(6);
// console.log(arr)

let nums = [2,3,4,5,6,7]

// nums.splice(3,0,8,9,10)
// console.log(nums);


// 

// let newArr = [78,56];

// console.log(nums.concat(newArr));

// console.log(nums.includes(69));
// console.log(nums.indexOf(9));

// console.log( nums.join("*"));


// let anotherArr = [1,2,3,4,5,6,7,8,9,10];



// anotherArr.forEach((ele,index,arr)=>{

//     console.log(`Each element value : ${ele}`);
//     console.log(`Index numnber is ${index}`);
//     console.log(arr);
    
// })

// let anotherArr = [1,2,3,4,5,6,7,8,9,10];

// let result = anotherArr.forEach((index,ele)=>{
//     for(let i = 1;i<=10;i++){
//       return  `${index}*${i} = ${index*i}`;
//     }
// })


// let secondArr = anotherArr.forEach((ele)=>{  ele*2});
// let mapResult = anotherArr.map((ele)=>(ele*2));
// console.log(secondArr);
// console.log(mapResult);




// let anotherArr = [1,2,3,4,5,6,7,8,9,10];

// let filterResult = anotherArr.filter((ele)=>{ return ele>=5});


// console.log(filterResult);



let anotherArr = [1,2,3,4,5,6,7,8,9,10];

let result = anotherArr.reduce((acc,ele)=>{
  return acc *= ele;
},1)

console.log(result);


























