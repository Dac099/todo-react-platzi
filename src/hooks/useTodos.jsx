import { useState } from "react";
import useLocalStorage from "./localStorage.jsx";

export function useTodos(props) {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  let todos_filtered = [];

  if (searchValue.length === 0) {
    todos_filtered = todos;
  } else {
    todos_filtered = todos.filter((todo) => {
      const todoText = todo.title.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  function createTask(title) {
    setTodos([
      ...todos,
      {
        title,
        completed: false,
      },
    ]);
  }

  function deleteAll() {
    todos_filtered = [];
    setTodos([]);
  }

  function completeTask(title) {
    const taskIndex = todos.findIndex((todo) => todo.title === title);

    const new_todos = [...todos];
    new_todos[taskIndex].completed = !new_todos[taskIndex].completed;

    setTodos(new_todos);
  }

  function deleteTask(title) {
    const taskIndex = todos.findIndex((todo) => todo.title === title);

    const new_todos = [...todos];
    new_todos.splice(taskIndex, 1);

    setTodos(new_todos);
  }

  return {
    useLocalStorage,
    todos,
    setTodos,
    searchValue,
    setSearchValue,
    todos_filtered,
    createTask,
    deleteTask,
    completeTask,
    deleteAll,
    openModal,
    setOpenModal,
  };
}

