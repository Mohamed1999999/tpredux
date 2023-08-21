import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "./actions"; // Importez l'action d'ajout de tâche

const AddTask = ({ addTask }) => {
  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = () => {
    if (taskDescription.trim() !== "") {
      const newTask = {
        id: Date.now(), // Générez un ID unique (vous pouvez utiliser une librairie comme uuid)
        description: taskDescription,
        isDone: false,
      };
      addTask(newTask); // Appel de l'action pour ajouter une tâche
      setTaskDescription("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default connect(null, { addTask })(AddTask);
