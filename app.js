// selector

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector('.filter-todo');

// event listner
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
filterOption.addEventListener('click', filterTodo);
// functions

function addTodo(event) {
    // Prevent form  form submitting
     event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    
    // Add todos to local storage
   // saveLocalTodos(todoInput.value);

    // check mark button
   const completeButton = document.createElement("button");
   completeButton.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;
   completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    const trashButton = document.createElement("button");
    trashButton.innerHtml = `<i class="icon-remove" aria-hidden="true"></i>`;


    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);  
    //todoList.appendChild(todoDiv);
    // append to list
    //todoList.appendChild(todoDiv);
    todoList.appendChild(todoDiv);

  

}


function deleteTodo(e){
    const item = e.target;
    // Delete 
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement; 
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        console.log(todo);

}

}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todos){
        switch(e.target.value){
            case "all":
                break;
            case "completed":
                if(todo.classLis.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.diaplay = "none"; 
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
                break;
    }
});
}


