const addNewTaskBtn = document.getElementById("add-new-task");
const modal = document.querySelector(".modal");
const modalCancelBtn = document.querySelector(".close-modal-btn");

const taskForm = document.querySelector(".task-form");


const todo = document.getElementById("todo");
const progress = document.getElementById("progress");
const done = document.getElementById("done");

let columns = [todo,progress,done];



// MOdal 
addNewTaskBtn.addEventListener("click",()=>{
    console.log(modal);
    
    modal.classList.add("active")
})


modalCancelBtn.addEventListener("click",()=>{
    modal.classList.remove("active")
})

taskForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    e.stopPropagation()
    let title = document.querySelector(".task-title").value
    let description = document.querySelector(".task-description").value
    createNewTask(title,description);
},true)

let dragTask  = null;
function createNewTask(title,desc){
        if(!title.trim()){
            alert("Title is needed")
            return 
        }

        if(!desc.trim()){
            alert("desc is needed.")
        }
        let div = document.createElement("div");
        div.setAttribute("draggable","true")
        div.className = "task";
        div.innerHTML = `
                <h2>${title}</h2>
                <p>${desc}</p>
                <button class="delete-btn">Delete</button>
        `

        todo.appendChild(div);
        div.addEventListener("drag",(e)=>{
            dragTask = div;
        })

        div.querySelector(".delete-btn").addEventListener("click",()=>{
            div.remove()
        })

        modal.classList.remove("active")
        taskForm.reset()
}


function addDragAndDropEvents(column){
    column.addEventListener("dragenter",(e)=>{
        e.preventDefault()
        column.classList.add("hover-over")
    })

    column.addEventListener("dragleave",(e)=>{
        e.preventDefault();
        column.classList.remove("hover-over")
    })

    column.addEventListener("dragover",(e)=>{
        e.preventDefault()
    })


    column.addEventListener("drop",(e)=>{
        e.preventDefault();
        console.log("Droped")
        column.classList.remove("hover-over");
        if(dragTask){
            column.appendChild(dragTask);
        }
    })
}


columns.map((col)=>{
    addDragAndDropEvents(col);
})