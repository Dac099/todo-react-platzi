import React, { useContext } from "react";
import { RiAddFill } from "react-icons/ri";
import { TbTrashX } from "react-icons/tb";
import { TodosContext } from "../context/TodosContext";
import "../styles/TodoMachine.css";

function TodoMachine() {
  const { deleteAll, setOpenModal } = useContext(TodosContext);

  function handleClick() {
    setOpenModal(true);
  }

  return (
    <section className="machine-controller">
      <button type="button" className="machine-btn" onClick={handleClick}>
        <RiAddFill />
      </button>
      <TbTrashX className="delete-all--btn" onClick={deleteAll} />
    </section>
  );
}

export default TodoMachine;
