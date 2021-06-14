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
        <table>
          <thead>
            <tr>
              <th>Task Text</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => {
              return (
                <tr key={index}>
                  <td>{task}</td>
                  <td>
                    <button onClick={() => handleTaskChange(index)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
