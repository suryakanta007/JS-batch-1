const one = () => Promise.resolve("one");

async function test() {
    console.log("Inside test function"); 
    const result = await one();
    console.log(result);
}

console.log("Before calling test function");//Sync
test();
console.log("After calling test function");

                                            //Micro task - 1.result=> "one"

// Before calling test function
// Inside test function
// After calling test function
// one



