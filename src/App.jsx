import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskControls from "./components/TaskControls";
import TaskList from "./components/TaskList";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "buy groceries",
      priority: 1,
      done: true,
    },
    {
      id: 2,
      text: "finish project report",
      priority: 3,
      done: false,
    },
    {
      id: 3,
      text: "call mom",
      priority: 2,
      done: false,
    },
  ]);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        maxWidth: "800px",
        margin: "auto"
      }}
    >
      <h2 style={{ textAlign: "center" }}>To-Do List</h2>
      <TaskForm />
      <TaskControls />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App
