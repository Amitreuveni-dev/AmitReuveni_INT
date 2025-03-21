import { addTodo, getTodos, initTodos, toggleTodo, callOnTodosUpdateCallbacks } from "./model.js";

const todosStorageKey = "todos";

export function init() {
    const todos = JSON.parse(localStorage.getItem(todosStorageKey)) ?? [];
    initTodos(todos);


    document.getElementById("removeAll").addEventListener("click", removeAll);
    
    document.getElementById("removeCompletedTodos").addEventListener("click", removeCompletedTodos);
    
    document.getElementById("filterSelect").addEventListener("change", (e) => {
        const filterValue = (e.target as HTMLSelectElement).value;
        filterTodos(filterValue);
    });

}

export function save() {
    localStorage.setItem(todosStorageKey, JSON.stringify(getTodos()));
}

export function onAddTodoSubmit(formData: FormData) {
    const rawContent = formData.get("content");

    if (typeof rawContent !== "string") {
        throw new Error("Content must be a string");
    }

    const content = rawContent.trim();

    if (!content) {
        throw new Error("Content can't be empty");
    }

    addTodo({
        id: crypto.randomUUID().replaceAll("-", "").slice(-8),
        createdAt: new Date().valueOf(),
        status: "Pending",
        content,
    });
}

export const onToggleTodo = toggleTodo;



export function removeAll() {
    const cleanAll = document.getElementById("todos");
    if (cleanAll) {
        cleanAll.innerHTML = "";
    }

    localStorage.removeItem("todos");
    
    initTodos([]);

}


export function removeCompletedTodos() {
    const cleanCompletedTodos = getTodos();
    const remainingTodos = cleanCompletedTodos.filter(todo => todo.status !== "Completed");

    localStorage.setItem(todosStorageKey, JSON.stringify(remainingTodos));


    initTodos(remainingTodos);
}



export function filterTodos(filterValue = "all") {
    const filterAllTodos = getTodos();

    let sortedTodos = [];

    if (filterValue === "Completed") {
        sortedTodos = filterAllTodos.filter(f => f.status === "Completed");
    } else if (filterValue === "Pending") {
        sortedTodos = filterAllTodos.filter(f => f.status === "Pending");
    } else {
        sortedTodos = filterAllTodos;
    }
    initTodos(sortedTodos);

}
