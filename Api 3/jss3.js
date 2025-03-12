document.addEventListener("DOMContentLoaded", function () {
    const todosContainer = document.getElementById("todos-container");

    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => {

            data.forEach(todo => {

                const todoCard = document.createElement("div");

                todoCard.classList.add("todo-card");

                if (todo.completed) {
                    todoCard.classList.add("completed");
                }

                const todoTitle = document.createElement("h3");
                todoTitle.textContent = todo.title;


                const todoStatus = document.createElement("p");
                
                todoStatus.textContent = todo.completed ? "Completada" : "Pendiente";

                todoCard.appendChild(todoTitle);
                todoCard.appendChild(todoStatus);

                todosContainer.appendChild(todoCard);
            });
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
});