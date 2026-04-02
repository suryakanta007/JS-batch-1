console.log("Script start"); // Synchronous code

setTimeout(function () {
    console.log("setTimeout"); // Macro task
}, 0);

new Promise((resolve, reject) => {
    console.log("Promise constructor"); // Synchronous code inside Promise constructor
    resolve("Promise resolved");
}).then(function (res) {
    console.log(res); // Micro task
});

async function asyncFunc() {
    console.log("asyncFunc start"); // Synchronous part of the async function
    let app = await new Promise((resolve) => {
        console.log("Promise inside asyncFunc");
        resolve("async/await resolved");
    });

    
    console.log("asyncFunc end"); // This line is treated as a micro task due to the await
}

asyncFunc();

console.log("Script end"); // Synchronous code

// Script start
// Promise constructor
// asyncFunc start
// asyncFunc end
// Script end
// Promise resolved
// setTimeout
// Promise inside asyncFunc





// Script start
// Promise constructor
// asyncFunc start
// Promise inside asyncFunc
// Script end
// Promise resolved
// asyncFunc end
// setTimeout