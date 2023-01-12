import React from "react";
import {
  RiCloseCircleLine,
  RiCheckboxCircleLine,
  RiPencilLine,
} from "react-icons/ri";

function TaskController({ completed, deleteTask, completeTask, title }) {
  return (
    <section
      className={completed ? "completed todo-controller" : "todo-controller"}
    >
      <div>
        <RiCheckboxCircleLine className="option-task" onClick={() => completeTask(title)}/>
      </div>

      <div>
        <RiCloseCircleLine className="option-task" onClick={() => deleteTask(title)}/>
      </div>

      <div>
        <RiPencilLine className="option-task" />
      </div>
    </section>
  );
}

export default TaskController;
