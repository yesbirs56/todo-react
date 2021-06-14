import React from "react";

import EditTask from "./EditTask";

const TodoList = ({ tasks, setTasks }) => {
  const [editIndex, setEditIndex] = React.useState(-1);
  const handleTaskChange = (index) => {
    setEditIndex(index);
  };
  const handleDelete = (index) => {
    setTasks((pre) => {
      const updated = [...pre];
      updated.splice(index, 1);
      return updated;
    });
  };
  return (
    <div>
      {editIndex === -1 && (
        <ul>
          {tasks.map((task, index) => {
            return (
              <div key={index}>
                <li>
                  {task}
                  <button onClick={() => handleTaskChange(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
              </div>
            );
          })}
        </ul>
      )}
      {editIndex !== -1 && (
        <EditTask
          index={editIndex}
          setEditIndex={setEditIndex}
          task={tasks[editIndex]}
          setTasks={setTasks}
        />
      )}
    </div>
  );
};

export default TodoList;
