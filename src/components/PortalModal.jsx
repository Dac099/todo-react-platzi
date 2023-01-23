import ReactDOM from "react-dom";
import React, { useState } from "react";
import "../styles/ModalTodo.css";
import { RiBookMarkFill, RiCloseLine } from "react-icons/ri";

export default function PortalModal({ createTask, setOpenModal }) {
  const [todo, setTodo] = useState("");

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

  function closeModal() {
    setOpenModal(false);
  }

  return ReactDOM.createPortal(
    <article className="modal-window">
      <RiCloseLine className="close-btn" onClick={closeModal} />
      <article className="modal-todo">
        <RiBookMarkFill />
        <input
          type="text"
          placeholder="¿Cuál es tu proxima tarea?"
          autoFocus
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="button" onClick={handleClick}>
          Crear
        </button>
      </article>
    </article>,
    document.getElementById("modal")
  );
}
