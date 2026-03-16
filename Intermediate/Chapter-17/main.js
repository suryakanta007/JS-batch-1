// Inventory check -
// Order create 
// Payment Charge 
// INvoice 


// 1sec = 1000ms
// function checkInventory(callBack){
//     let error = null;

//         setTimeout(()=>{
//             // Network CAll, Db call , File I/O Opration..
//             console.log("Checking Inventory.....");
//             callBack(error)
//         },2000)


// }

function checkInventory() {
    let error = null;
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            // Network CAll, Db call , File I/O Opration..
            console.log("Checking Inventory.....");
            if(error){
                reject(error)
            }
            resolve()
        }, 2000)
    })
    return promise
}

// function createOrder(callBack) {
//     let error = null;
//     setTimeout(() => {
//         console.log("Creating Order in the database...");
//         // error = new Error("Filed to create the order in database...")
//         callBack(error)
//     }, 1000)
// }

function createOrder() {
    let error = null;
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Creating Order in the database...");
            // error = new Error("Filed to create the order in database...")
            if(error){
                reject(error)
            }
            resolve()
        }, 1000)
    })
}


// function chargePaymet(callBack) {
//     let error = null;
//     setTimeout(() => {
//         console.log("Charging Paymennt through paymentgateway....");
//         const chargedAmount = 9000;
//         callBack(error, chargedAmount)
//     }, 2000)
// }

function chargePaymet(){
    let error = null;
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Charging Paymennt through paymentgateway....");
            const chargedAmount = 9000;
            if(error){
                reject(error)
            }
            resolve()
        }, 2000)
    })
}




function sendInvoice() {
    let error = null;
    setTimeout(() => {
        console.log("Seding invoice to the User..");
    }, 1000)

}



// function main() {
//     //!     // CallBack hell
//     //    checkInventory((err)=>{
//     //     if(err){
//     //         console.log(err);
//     //         return
//     //     }
//     //     createOrder((err)=>{
//     //         if(err){
//     //             console.log(err);
//     //             return
//     //         }
//     //         chargePaymet((err,amount)=>{
//     //             if(err){
//     //                 console.log(err);
//     //                 return
//     //             }
//     //             console.log("Charged amount is ",amount);

//     //             sendInvoice()
//     //         })
//     //     });
//     //    });
//     // createOrder();
//     // chargePaymet();
//     // sendInvoice();



    // checkInventory()
    //     .then(createOrder)
    //     .then(chargePaymet)
    //     .then(sendInvoice)
    //     .catch((err)=>{
    //         console.log("We handeled Error successfuly....")
    //         console.log(err);
            
    //     })
    //     .finally(()=>{
    //         console.log("I am always chill");
            
    //     })


    
    
   

//     // console.log("Other Orders are processing...");

// }


async function main(){
    setTimeout(()=>{
        console.log("Process Other Requset Also....");
    },1000)
    await checkInventory() //2min
    await createOrder()
    await chargePaymet()
    await sendInvoice()
}





main();