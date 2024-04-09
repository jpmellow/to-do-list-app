import { useEffect, useState } from "react";
import { TaskInput } from "./TaskInput";
import { TaskList } from "./TaskList";

export function TodoList() {
  const [todos, setTodos] = useState(["Buy groceries", "Walk dog"]);
  const [task, setTask] = useState("");
  const [todosVersions, setTodosVersions] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      const newTodos = [task, ...todos];
      setTodos(newTodos);
      setTask("");
    }
  };

  const handleDeleteTaskIndex = (indexToRemove) => {
    const newArray = todos.filter((_, index) => index !== indexToRemove);
    setTodos(newArray);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <TaskInput task={task} onTaskChange={setTask} onAddTask={handleAddTask} />
      <TaskList todos={todos} onDeleteTaskIndex={handleDeleteTaskIndex} />
    </>
  );
}
