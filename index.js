const input = document.querySelector("input");
const firstButton = document.querySelector(".first-button");
const tasksContainer = document.querySelector(".tasks");

firstButton.addEventListener("click", function(){
    if(input.value === ""){
        return;
    }
    else{
        const task = document.createElement("div");
        task.classList.add("task");
        const buttonDeleteElement = document.createElement("button");
        buttonDeleteElement.classList.add("delete-button");
        const taskText = document.createElement("span");
        taskText.classList.add("task-text");
        const checkbox = document.createElement("input");
        checkbox.classList.add("checkbox");
        checkbox.type = "checkbox";
        taskText.textContent = input.value;
        buttonDeleteElement.textContent = "Delete";
        tasksContainer.append(task);
        task.append(checkbox);
        task.append(taskText);
        task.append(buttonDeleteElement);
        input.value = "";

        buttonDeleteElement.addEventListener("click", function(){
        task.remove();
    })
        checkbox.addEventListener("click", function(){
            if(checkbox.checked){
                taskText.style.textDecoration = 'line-through';
            }
            else{
                taskText.style.textDecoration = 'none';
            }
        })
    }
})