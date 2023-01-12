import React, { useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import "../styles/TodoFinder.css";

function TodoFinder() {
  const { searchValue, setSearchValue } = useContext(TodosContext);

  return (
    <form className="todo-search">
      <input
        type="text"
        placeholder="¿Qué tarea buscas?"
        className="todo-search--input"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
    </form>
  );
}

export default TodoFinder;
