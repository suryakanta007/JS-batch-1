
let  allTasks = {
    
}
const addNewTaskBtn = document.getElementById("add-new-task");
const modal = document.querySelector(".modal");
const modalCancelBtn = document.querySelector(".close-modal-btn");

const taskForm = document.querySelector(".task-form");


const todo = document.getElementById("todo");
const progress = document.getElementById("progress");
const done = document.getElementById("done");

let columns = [todo,progress,done];


if(localStorage.getItem("tasks")){
    allTasks = JSON.parse(localStorage.getItem("tasks"));

    for(let colId in allTasks){
        let col = document.getElementById(colId);
        
        allTasks[colId].forEach((task)=>{
            let div = createNewTask(task.title,task.description,col);
            console.log(div)
            col.appendChild(div);
        })
    }

    updateCounts();
}


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
function createNewTask(title,desc,col=todo){
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

        col.appendChild(div);
        div.addEventListener("drag",(e)=>{
            dragTask = div;
        })

        div.querySelector(".delete-btn").addEventListener("click",()=>{
            div.remove()
            saveAllTasks();
            updateCounts();
        })
        saveAllTasks(); 
        updateCounts()
        modal.classList.remove("active")
        taskForm.reset()

        return div
}


function addDragAndDropEvents(column){
    column.addEventListener("dragenter",(e)=>{
        e.preventDefault()
        column.classList.add("hover-over");
    })

    column.addEventListener("dragleave",(e)=>{
        e.preventDefault();
        column.classList.remove("hover-over")
    })

    column.addEventListener("dragover",(e)=>{
        e.preventDefault()
    });


    column.addEventListener("drop",(e)=>{
        e.preventDefault();
        console.log("Droped")
        column.classList.remove("hover-over");
        if(dragTask){
            column.appendChild(dragTask);
        }
        saveAllTasks();
        updateCounts();
    })
}

function saveAllTasks(){
    columns.forEach((col)=>{
        let tasks = col.querySelectorAll(".task");
        allTasks[col.id] = Array.from(tasks).map((t)=>{
            return {
                title:t.querySelector("h2").innerText,
                description:t.querySelector("p").innerText
            }
        })

    })

    localStorage.setItem("tasks",JSON.stringify(allTasks));
}


function updateCounts(){
    columns.forEach((col)=>{
        let tasks = col.querySelectorAll(".task");
        let countBox = col.querySelector(".right");
        console.log(tasks.length)
        countBox.innerText = `Count ${tasks.length}`
    })
}

columns.map((col)=>{
    addDragAndDropEvents(col);
})