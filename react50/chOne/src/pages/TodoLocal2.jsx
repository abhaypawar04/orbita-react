import { useState, useEffect } from "react";

function TodoLocal2() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editindex, setEditIndex] = useState(null);
  //---
  const handleAdd = () => {
    if (editindex !== null) {
      setTask((prev) =>
        prev.map((item, index) => (index == editindex ? newTask : item)),
      );
      setEditIndex(null);
    } else {
      setTask((prev) => [...prev, newTask]);
    }
    setNewTask("");
  };
  //-----
  const handleDelete = (index) => {
    setTask((prev) => prev.filter((_, i) => i != index));
    //setTask(task.filter((_, i) => i !== index));
  };
  //-----
  const handleEdit = (item, index) => {
    setNewTask(item);
    setEditIndex(index);
  };
  //-----
  //-----
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (savedTasks) {
      setTask(savedTasks);
    }
  }, []);
  //-----
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);
  //-----
  return (
    <>
      <h1>todo Local Storage</h1>
      <hr />
      <div>
        <input
          type="text"
          name="newTask"
          value={newTask}
          placeholder="enter task here"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={() => handleAdd()}>add task</button>
      </div>

      <div>
        <ul>
          {task.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleEdit(item, index)}>edit</button>
              <button onClick={() => handleDelete(index)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default TodoLocal2;
