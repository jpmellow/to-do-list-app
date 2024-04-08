import { TaskListItem } from "./TaskListItem";

export function TaskList({ todos }) {
    return todos.map({todo} => <TaskListItem key={(todo)}) />;
}

