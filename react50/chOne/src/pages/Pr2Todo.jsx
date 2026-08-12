import { useState } from "react";

function Pr2Todo() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  return (
    <>
      <h1>TODO</h1>
      <hr />
      <div>
        <input
          type="text"
          value={newTask}
          name="newTask"
          placeholder="enter task here"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={() => {
            if (editIndex !== null) {
              const updatedTask = task.map((item, index) =>
                index == editIndex ? newTask : item,
              );
              setTask(updatedTask);
              // clear---
              setEditIndex(null);
              setNewTask("");
              setEditIndex(null);
            } else {
              setTask([...task, newTask]);
              setNewTask("");
            }
          }}
        >
          ADD TASK
        </button>
      </div>

      <div>
        <ul>
          {task.map((item, index) => (
            <li>
              {item}
              <button
                onClick={() => setTask(task.filter((_, i) => i !== index))}
              >
                delete
              </button>
              <button
                onClick={() => {
                  setEditIndex(index);
                  setNewTask(item);
                }}
              >
                edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Pr2Todo;
