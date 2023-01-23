import React from "react";
import "../styles/TodoFinder.css";

function TodoFinder({searchValue, setSearchValue}) {

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
