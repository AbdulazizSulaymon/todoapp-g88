import { createStore } from "redux";

const initialStore = {
    value: "123",
    tasks: [
        { title: "task 1" },
        { title: "task 2" },
        { title: "task 3" },
    ]
}

const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case "SET_VALUE":
            return { ...state, value: action.payload };

        case "ADD_TASK":
            if (action.payload.trim() === "") return state;

            return {
                ...state,
                value: "",
                tasks: [...state.tasks, { title: action.payload }]
            }

        case "DELETE_TASK":
            const tasks = [...state.tasks];
            tasks.splice(action.payload, 1);

            return { ...state, tasks: tasks };

        default: return state;
    }
}

const store = createStore(reducer);

export default store;
