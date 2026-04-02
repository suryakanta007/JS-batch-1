
 console.log("Before.") //Sync 
 setTimeout(()=>{
   console.log("Form timeout.")
 },2000)
 Promise.resolve().then((res)=>{console.log("From promise 1")})
 Promise.resolve().then((res)=>{console.log("Form Promise.")})
 Promise.resolve().then((res)=>{console.log("Form Promise 2.")})
 setTimeout(()=>{
   console.log("Form timeout.2")
 },0)
 console.log("After.")
 

//  Before
// After 
// From promise 1
// From promise 
// From promise 2
// Form timeout.2
// Form timeout.