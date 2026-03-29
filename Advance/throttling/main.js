
const sendMessage = (message)=>{
    console.log(message);
}
function throttol(fn,delay){
    let lastTime = 0;
    return function(message){
        let now = Date.now();
        if(now-lastTime<delay){
            return
        }
        lastTime = now;
        return fn(message);
    }
}


const sendMessageSlowMode = throttol(sendMessage,2000);





sendMessageSlowMode("cghsvcvssvdvvbh 1st");
sendMessageSlowMode("cghsvcvssvdvvbh");
sendMessageSlowMode("cghsvcvssvdvvbh");
sendMessageSlowMode("cghsvcvssvdvvbh");
sendMessageSlowMode("cghsvcvssvdvvbh");
sendMessageSlowMode("cghsvcvssvdvvbh");
sendMessageSlowMode("cghsvcvssvdvvbh");
setTimeout(()=>{
    sendMessageSlowMode("After 1sec")
},1000)

setTimeout(()=>{
    sendMessageSlowMode("After 2sec")
},3000)