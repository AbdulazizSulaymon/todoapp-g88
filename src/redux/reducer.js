let tasksLS = localStorage.getItem("tasks");

console.log(JSON.parse(tasksLS));

const initialStore = {
    value: "",
    tasks: (tasksLS ? JSON.parse(tasksLS) : [])
}

const reducer = (state = initialStore, action) => {
    let tasks, index;

    switch (action.type) {
        case "SET_VALUE":
            return { ...state, value: action.payload };

        case "ADD_TASK":
            if (action.payload.trim() === "") return state;

            tasks = [...state.tasks, { title: action.payload }];

            localStorage.setItem("tasks", JSON.stringify(tasks));

            return { ...state, value: "", tasks }

        case "DELETE_TASK":
            tasks = [...state.tasks];
            tasks.splice(action.payload, 1);

            localStorage.setItem("tasks", JSON.stringify(tasks));

            return { ...state, tasks };

        case "EDIT_TASK":
            tasks = [...state.tasks];
            tasks[action.payload.index].title = action.payload.value;

            localStorage.setItem("tasks", JSON.stringify(tasks));

            return { ...state, tasks };

        case "UP":
            tasks = [...state.tasks];
            index = action.payload;
            if (index > 0) {
                const temp = tasks[index - 1];
                tasks[index - 1] = tasks[index];
                tasks[index] = temp;
            }

            localStorage.setItem("tasks", JSON.stringify(tasks));

            return { ...state, tasks };

        case "DOWN":
            tasks = [...state.tasks];
            index = action.payload;
            if (index < tasks.length - 1) {
                const temp = tasks[index + 1];
                tasks[index + 1] = tasks[index];
                tasks[index] = temp;
            }

            localStorage.setItem("tasks", JSON.stringify(tasks));

            return { ...state, tasks };

        case "TOGGLE_COMPLETED":
            tasks = [...state.tasks];
            index = action.payload;
            tasks[index].completed = !tasks[index].completed;

            localStorage.setItem("tasks", JSON.stringify(tasks));

            return { ...state, tasks };

        default: return state;
    }
}


export default reducer;