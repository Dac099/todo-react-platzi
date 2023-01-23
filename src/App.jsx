import React from "react";
import TodoCounter from "./components/TodoCounter.jsx";
import TodoMachine from "./components/TodoMachine.jsx";
import TodoList from "./components/TodoList.jsx";
import TodoFinder from "./components/TodoFinder.jsx";
import TaskCard from "./components/TodoCard.jsx";
import TaskController from "./components/TodoController.jsx";
import PortalModal from "./components/PortalModal.jsx";
// import useLocalStorage from "./hooks/localStorage.jsx";
import { useTodos } from "./hooks/useTodos";
import "./styles/App.css";

function App() {
  const {
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
  } = useTodos();

  return (
    <main>
      <TodoCounter todos={todos} />

      <TodoFinder searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoMachine setOpenModal={setOpenModal} deleteAll={deleteAll} />

      <TodoList>
        {todos.map((todo, i) => (

          <TaskCard key={i} data={todo}>

            <TaskController
              completed={todo.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
              title={todo.title}
            />
            
          </TaskCard>

        ))}
      </TodoList>

      {!!openModal && <PortalModal createTask={createTask} setOpenModal={setOpenModal}></PortalModal>}
    </main>
  );
}

export default App;
