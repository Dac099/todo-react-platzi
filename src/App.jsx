import React from "react";
import TodoCounter from "./components/TodoCounter.jsx";
import TodoMachine from "./components/TodoMachine.jsx";
import TodoList from "./components/TodoList.jsx";
import TodoFinder from "./components/TodoFinder.jsx";
import ModalTodo from "./components/ModalTodo.jsx";
import "./styles/App.css";

function App() {

  return (
    <main>
      <TodoCounter />
      <TodoFinder />
      <TodoMachine />
      <TodoList />
      <ModalTodo />
    </main>
  );
}

export default App;
