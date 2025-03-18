const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("Please enter a task!");
        return;
    }

    const todoItem = document.createElement("li");
    const todoSpan = document.createElement("span");
    const deleteButton = document.createElement("button");

    todoSpan.textContent = todoText;
    deleteButton.textContent = "Delete";

    todoItem.appendChild(todoSpan);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);

    todoSpan.addEventListener("click", () => {
        todoItem.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", () => {
        todoList.removeChild(todoItem);
    });

    todoInput.value = "";
}

addButton.addEventListener("click", addTodo);

todoInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTodo();
    }
});
