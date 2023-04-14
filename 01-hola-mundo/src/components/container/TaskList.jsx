import React from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/TaskComponent";

const TaskList = () => {
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );

  const changeState = (id) => {
    console.log("TODO: Cambiar estado de una tarea");
  };

  return (
    <div>
      <div>Your Tasks:</div>
      {/* TODO: Aplicar un map para renderizar una lista */}
      <TaskComponent task={defaultTask} />
    </div>
  );
};

export default TaskList;
