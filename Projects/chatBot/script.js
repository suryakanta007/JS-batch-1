import {APIKEY} from "./api.js"
const chatBox = document.getElementById("chat-box");
const inputArea = document.getElementById("user-input");
const sendBtn = document.querySelector(".send-btn");

if(localStorage.getItem("chatHistory")){
    let chats = JSON.parse(localStorage.getItem("chatHistory"));
    
    chatBox.innerHTML = chats

}
function addMessage(message,chatType){
    const msgEle = document.createElement("div");
    msgEle.classList.add("message",chatType);
    msgEle.innerText = message;
    chatBox.appendChild(msgEle);
    chatBox.scrollTop = chatBox.scrollHeight;
    inputArea.value = "";
}

function showTyping(){
    const ele = document.createElement("div");
    ele.classList.add("message", "bot-message");
    ele.innerText= "Ai is typing...."
    chatBox.appendChild(ele);
    chatBox.scrollTop = chatBox.scrollHeight;
    return ele;
}

async function getBotReplay(message){
    let url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${APIKEY}`;

    const payload = {
        contents: [
          {
            parts: [
              { text: `${message}` },
            ],
          },
        ],
      };

      const opctions = {
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(payload)

      }
     const res = await fetch(url,opctions);
     const data = await res.json();
     console.log(data);
     
     return data.candidates[0].content.
     parts[0].text;
}


async function getChat(){
    const message = inputArea.value.trim();
    console.log(message);
    if(message==="")return;
    addMessage(message,"user-message");
    let typingDiv = showTyping();
    let botReplay ;
    botReplay = await getBotReplay(message);
    typingDiv.remove();
    addMessage(botReplay,"bot-message")
    localStorage.setItem("chatHistory",JSON.stringify(chatBox.innerHTML));
    
    

    
}



sendBtn.addEventListener("click",getChat)