import React from "react";
import { useSelector } from "react-redux";
import Task from "../Task";

const TasksList = () => {
  const { tasks } = useSelector((state) => state.todo);
  console.log(tasks);
  const renderTasks = (task) => <Task key={task.id} task={task} />;
  return (
    <div>
      <h2>Tasks:</h2>
      <ol>{tasks.map(renderTasks)}</ol>
    </div>
  );
};

export default TasksList;
