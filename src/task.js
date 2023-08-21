import React from "react";

const Task = ({ task }) => {
  return (
    <li>
      <input type="checkbox" checked={task.isDone} />
      {task.description}
    </li>
  );
};

export default Task;
