

function debounce(fn,delay){
    let lastTime;
    return function(query){
        clearTimeout(lastTime);
       lastTime = setTimeout(()=>{
            fn(query)
        },delay)
    }
}

const search = (query)=>{
    console.log("Search for " , query);
}

const searchWithDebounce = debounce(search,3000);




searchWithDebounce("j");
searchWithDebounce("ja");
searchWithDebounce("jav");
searchWithDebounce("java");
searchWithDebounce("javaS");
searchWithDebounce("javaSc");
searchWithDebounce("javaScr");
searchWithDebounce("javaScri");
searchWithDebounce("javaScrip");
searchWithDebounce("javaScript");

setTimeout(()=>{
    searchWithDebounce("javaScript ok")
},5000);