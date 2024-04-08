import { useState } from "react";
import { TaskInput } from "./TaskInput";
import { TaskList } from "./TaskList";

export function TodoList() {
    const [todos, setTodos] = useState(["Buy groceries", "Walk dog"]);
    const [task, setTask] = useState("");

    return (
        <>
            <TaskInput/>
            <TaskList todos={todos} />
        </>
    );
}