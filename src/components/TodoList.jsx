import React  from "react";
import "../styles/TodoList.css";

function TodoList(props) {

  return (
    <section className="todo-list">
      {props.children}
    </section>
  );
}

export default TodoList;
