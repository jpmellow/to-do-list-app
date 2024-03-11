export function TaskInput({ todos }){
    return todos.map((todo) => (
        <TaskListItem key={todo} todo={todo} />
    ))
}