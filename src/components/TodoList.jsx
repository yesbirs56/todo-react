import React from "react";

const TodoList = ({ tasks, setTasks }) => {
  const handleDelete = (index) => {
    setTasks((pre) => {
      const updated = [...pre];
      updated.splice(index, 1);
      return updated;
    });
  };
  return (
    <div>
      <ul>
        {tasks.map((task, index) => {
          return (
            <div key={index}>
              <li>{task}</li>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
