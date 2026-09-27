
const taskInput = document.getElementById("task_input");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("task_list");

//part 1:
function add_task(){
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return; //terminates the func()
    }

    const li = document.createElement("li");
    li.innerHTML = `<span>${taskText}</span> <button class="delete_btn">Delete</button>`;

    taskList.appendChild(li);

    taskInput.value = "";
//part 2: delete part
taskList.addEventListener("click",function(event) {
     
    // Check if the clicked element has the "delete_btn" class
    if(event.target.classList.contains("delete_btn")){

        const item = event.target.parentElement;
        item.remove(); //del from parent 
    }
});

}

