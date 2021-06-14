import React from "react";

const EditTask = (props) => {
  const [task, setTask] = React.useState(props.task);
  const handleEdit = () => {
    props.setTasks((pre) => {
      const updated = [...pre];
      updated.splice(props.index, 1, task);
      return updated;
    });
    props.setEditIndex(-1);
  };
  return (
    <div>
      <h1>Edit The Task</h1>
      <textarea
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        cols="30"
        rows="10"
      ></textarea>

      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default EditTask;
