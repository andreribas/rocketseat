const LOCAL_STORAGE_INDEX_KEY = "todos_list";

todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_INDEX_KEY)) || [
    "Fazer café",
    "Estudar Javascript",
    "Acessar comunidade da Rocketseat",
];

function renderTodos() {
    const listElement = document.querySelector("#todos-list");
    listElement.innerHTML = '';
    todos.forEach(todo => renderTodo(listElement, todo));
}

function renderTodo(listElement, todoText) {
    const textElement = document.createTextNode(todoText);

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');
    linkElement.setAttribute('onclick', `removeTodo(${todos.indexOf(todoText)})`);
    linkElement.appendChild(document.createTextNode(' Remover'));

    const todoElement = document.createElement('li');
    todoElement.appendChild(textElement);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
}

function addTodo() {
    const todoElement = document.querySelector("#app input")
    todos.push(todoElement.value);
    todoElement.value = '';
    updateLocalStorage();
    renderTodos();
}

function removeTodo(index) {
    todos.splice(index, 1);
    renderTodos();
    updateLocalStorage();
}

function updateLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_INDEX_KEY, JSON.stringify(todos));
}

renderTodos();