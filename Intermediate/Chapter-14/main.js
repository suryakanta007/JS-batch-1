// const button = document.getElementById("btn");

// // button.onclick = (e)=>{
// //     console.log(e)
// //     console.log("Btn is clicked.")
// // }

// button.addEventListener("",()=>{
//     console.log("callback function is invoked after click event happens.");
// })

// const card = document.querySelector(".card");



// card.addEventListener("mouseover",()=>{
//     console.log("Working");
//     card.style.background = "pink"
    
// })

// card.addEventListener("mouseout",(event)=>{
  
//     console.log(event);
    
//     card.style.background = "crimson"
// })


// const card1 = document.querySelector(".card");
// const card2 = document.querySelector(".card-2");
// const card3 = document.querySelector(".card-3");

// const body  = document.querySelector("body");

// body.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     console.log("Body is clicked.");
    
// },true)


// card1.addEventListener("click",(e)=>{
//     console.log("Hero card is Clicked.");
    
// },true)

// card2.addEventListener("click",(e)=>{
//     console.log("card2 is clicked.");
//     e.stopPropagation()
// },true)

// card3.addEventListener("click",(e)=>{
//     // e.stopPropagation()
//     console.log("Child card is clicked.");
    
// },true)



const form = document.getElementById("form");
const nameInput = document.getElementById("name");

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let name = nameInput.value;
    nameInput.value = ""
    console.log("Sending the name to the database.")
    console.log(name)
})


const body = document.querySelector("body");
const moodBtn = document.querySelector(".mood-btn");

moodBtn.addEventListener("click",()=>{
    console.log(body.classList);
    body.classList.toggle("dark");
    console.log(moodBtn.value);
    
    console.log(moodBtn.value == "Dark mood");
    

    if(moodBtn.innerText == "Dark mood"){
        moodBtn.innerText = "Light mood"
    }
    else{
        moodBtn.innerText = "Dark mood"
    }
    
    
})