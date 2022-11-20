import { createContext, useState, useEffect } from "react";
import data from "../data/tasks.json"

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTaks] = useState([]);

  const createTask = (task) => {
    setTaks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTaks(tasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    setTaks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
