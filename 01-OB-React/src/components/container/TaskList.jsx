import React, { useEffect, useState } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/TaskComponent";

// Importamos la hoja de estilos de task.scss
import "../../styles/task.scss";

const TaskList = () => {
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );

  // Estado del componente
  const [tasks, setTasks] = useState(defaultTask);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Task state has been modified");
    setLoading(false);
    return () => {
      console.log("TaskList omponent is going to unmount...");
    };
  }, []);

  const changeCompleted = (id) => {
    console.log("TODO: Cambiar estado de una tarea");
  };

  return (
    <div>
      <div>
        <h1>Your Tasks:</h1>
      </div>
      {/* TODO: Aplicar un map para renderizar una lista */}
      <TaskComponent task={defaultTask} />
    </div>
  );
};

export default TaskList;
