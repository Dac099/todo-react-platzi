import React, { useContext, useState } from "react";
import "../styles/ModalTodo.css";
import { RiBookMarkFill, RiCloseLine } from "react-icons/ri";
import { TodosContext } from "../context/TodosContext";

function ModalTodo() {
  const [todo, setTodo] = useState("");
  const { createTask } = useContext(TodosContext);

  function handleClick() {
    if (todo.length === 0) {
      const modal = document.querySelector(".modal-todo");
      modal.classList.add("shake");
      setTimeout(() => {
        modal.classList.remove("shake");
      }, 800);
      return;
    }

    createTask(todo);
    setTodo("");
  }

  function closeModal(e) {
    const modal = document.querySelector(".modal-window");
    const btn_close = document.querySelector(".close-btn");

    if (e.target.className != modal.className) {
      return;
    }

    modal.classList.remove("show");
    modal.classList.add("hide");
  }

  function closeBtn() {
    const modal = document.querySelector(".modal-window");
    modal.classList.remove("show");
    modal.classList.add("hide");
  }

  return (
    <article className="modal-window" onClick={(e) => closeModal(e)}>
      <RiCloseLine className="close-btn" onClick={closeBtn} />
      <article className="modal-todo">
        <RiBookMarkFill />
        <input
          type="text"
          placeholder="¿Cuál es tu proxima tarea?"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          autoFocus
        />
        <button type="button" onClick={handleClick}>
          Crear
        </button>
      </article>
    </article>
  );
}

export default ModalTodo;
