import React, { useEffect, useState } from "react";
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

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Task state has been modified");
    return () => {
      console.log("TaskList omponent is going to unmount...");
    };
  }, []);

  // Estado del componente
  const [tasks, setTasks] = useState(defaultTask);

  const changeCompleted = (id) => {
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
