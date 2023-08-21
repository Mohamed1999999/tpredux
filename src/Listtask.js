import React, { useState } from "react";
import { connect } from "react-redux";
import Task from "./task.js"; // Importez le composant Task

const ListTask = ({ tasks }) => {
  const [showDone, setShowDone] = useState(false); // État pour le filtrage

  const filteredTasks = showDone ? tasks.filter((task) => task.isDone) : tasks;

  return (
    <div>
      <h2>Task List</h2>
      <div>
        <label>
          Show Done Tasks:
          <input
            type="checkbox"
            checked={showDone}
            onChange={() => setShowDone(!showDone)}
          />
        </label>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks, // Assurez-vous que "tasks" correspond à la clé dans votre état global
});

export default connect(mapStateToProps)(ListTask);
