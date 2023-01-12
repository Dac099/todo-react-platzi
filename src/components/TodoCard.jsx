import React from "react";
import TaskController from "./TodoController.jsx";
import "../styles/TodoCard.css";

function TaskCard({ data, deleteTask, completeTask }) {
  return (
    <article className={data.completed ? "task-card completed" : "task-card"}>
      <h3>{data.title}</h3>
      <TaskController completed={data.completed} deleteTask={deleteTask} completeTask={completeTask} title={data.title}/>
    </article>
  );
}

export default TaskCard;
