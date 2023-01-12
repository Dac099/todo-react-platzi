import React from "react";
import TodoCounter from "./components/TodoCounter.jsx";
import TodoMachine from "./components/TodoMachine.jsx";
import TodoList from "./components/TodoList.jsx";
import TodoFinder from "./components/TodoFinder.jsx";
import PortalModal from "./components/PortalModal.jsx";
import { TodosContext } from "./context/TodosContext.jsx";
import "./styles/App.css";

function App() {
  const { openModal } = React.useContext(TodosContext);

  return (
    <main>
      <TodoCounter />
      <TodoFinder />
      <TodoMachine />
      <TodoList />
      {!!openModal && <PortalModal></PortalModal>}
    </main>
  );
}

export default App;
