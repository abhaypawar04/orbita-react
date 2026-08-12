import { useState } from "react";

function Todo3() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  return (
    <>
      <h1>todo app</h1>
      <hr />

      <input
        type="text"
        name="newTask"
        value={newTask}
        placeholder="write here"
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button
        onClick={() => setTask([...task, { text: newTask, completed: false }])}
      >
        submit
      </button>

      <hr />

      <ul>
        {task.map((item, index) => (
          <li key={index}>
            {" "}
            {item.text}
            <button>delete</button>
            <button
              onClick={() =>
                setTask(
                  task.map((t, i) =>
                    i === index ? { ...t, completed: !t.completed } : t,
                  ),
                )
              }
            >
              {item.completed ? "undo" : "mark as done"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo3;
