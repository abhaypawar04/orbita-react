import { useState } from "react";

function Todo1() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  return (
    <>
      <h1>here is a todo app</h1>
      <hr />
      <h2>enter task here:</h2>
      <input
        type="text"
        name="newTask"
        value={newTask}
        placeholder="enter task here"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={() => setTask([...task, newTask])}>add task</button>
      <hr />
      <ul>
        {task.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => setTask(task.filter((_, i) => i !== index))}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Todo1;
