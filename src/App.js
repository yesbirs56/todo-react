import "./App.css";
import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [create, setCreate] = useState(false);

  return (
    <div className="App">
      {!create && (
        <div>
          <TodoList tasks={tasks} setTasks={setTasks} />
          <button
            onClick={(evt) => {
              setCreate(true);
            }}
          >
            Add Task
          </button>
        </div>
      )}
      {create && <Task setTasks={setTasks} setCreate={setCreate} />}
    </div>
  );
}

export default App;
