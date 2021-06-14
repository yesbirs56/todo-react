import React, { useState } from "react";

const Task = (props) => {
  const [task, setTask] = useState("");

  const handleSave = () => {
    props.setTasks((pre) => {
      const updated = [...pre];
      updated.push(task);
      return updated;
    });
    props.setCreate(false);
  };
  return (
    <div>
      <h1>Create Task </h1>
      <label>Enter the Taks : </label>
      <textarea
        name="task"
        cols="40"
        rows="5"
        value={task}
        onChange={(evt) => {
          setTask(evt.target.value);
        }}
      ></textarea>

      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Task;
