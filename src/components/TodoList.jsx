import React, { useContext } from "react";
import TaskCard from "./TodoCard.jsx";
import "../styles/TodoList.css";
import { TodosContext } from "../context/TodosContext.jsx";

function TodoList() {
  const { todos, deleteTask, completeTask } = useContext(TodosContext);

  return (
    <section className="todo-list">
      {todos.map((todo, i) => (
        <TaskCard
          key={i}
          data={todo}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </section>
  );
}

export default TodoList;
