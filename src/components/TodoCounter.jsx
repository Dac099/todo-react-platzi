import React from "react";
import "../styles/TodoCounter.css";

function TodoCounter({todos}) {

  function percentage() {
    let todos_completed = todos.filter(
      (todo) => todo.completed === true
    ).length;

    return parseInt((100 * todos_completed) / todos.length);
  }

  return (
    <section>
      {todos.length > 0 ? (
        <h1 className="todo-counter">
          Has completado el{" "}
          <span className="todo-counter-number">{percentage()}%</span> de tus
          tareas
        </h1>
      ) : (
        <h1>No tienes tareas por completar</h1>
      )}
    </section>
  );
}

export default TodoCounter;
