import React, { useEffect, useState } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/TaskComponent";
import { TaskForm } from "../pure/forms/TaskForm";

// Importamos la hoja de estilos de task.scss
import "../../styles/task.scss";

const TaskList = () => {
  const defaultTask1 = new Task(
    "Example 1",
    "Default description 1",
    true,
    LEVELS.NORMAL
  );

  const defaultTask2 = new Task(
    "Example 2",
    "Default description 2",
    false,
    LEVELS.URGENT
  );

  const defaultTask3 = new Task(
    "Example 3",
    "Default description 3",
    false,
    LEVELS.BLOCKING
  );

  // Estado del componente
  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Task state has been modified");
    setLoading(false);
    return () => {
      console.log("TaskList omponent is going to unmount...");
    };
  }, []);

  const completeTask = (task) => {
    console.log("Complete this task: ", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    // We update the state of the component with the new list of tasks and it will update the
    // iteration of tasks in order to show the task updated
    setTasks(tempTasks);
  };

  const deleteTask = (task) => {
    console.log("Delete this task: ", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  };

  const addTask = (task) => {
    console.log("Delete this task: ", task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  };

  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* Card header title */}
          <div className="card-header p-3">
            <h5>Your Tasks:</h5>
          </div>
          {/* Card body */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => {
                  return (
                    <TaskComponent
                      key={index}
                      task={task}
                      complete={completeTask}
                      remove={deleteTask}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <TaskForm add={addTask} />
    </div>
  );
};

export default TaskList;
