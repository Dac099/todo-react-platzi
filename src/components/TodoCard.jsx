import React from "react";
import "../styles/TodoCard.css";

function TaskCard({ data, children }) {
  return (
    <article className={data.completed ? "task-card completed" : "task-card"}>
      <h3>{data.title}</h3>
      {children}
    </article>
  );
}

export default TaskCard;
