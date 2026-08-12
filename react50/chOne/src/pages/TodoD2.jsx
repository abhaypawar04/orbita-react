import { useState } from "react";

function TodoD2() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  return (
    <>
      <h1>ToDoMenia</h1>
      <hr />

      <div>
        <input
          type="text"
          name="newTask"
          value={newTask}
          placeholder="enter task here"
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />

        <button
          onClick={() =>
            setTask([...task, { text: newTask, completed: false }])
          }
        >
          Add task
        </button>
        <hr />
      </div>

      <div>
        <table>
          {task.map((item, index) => (
            <tr key={index}>
              <td>{item.text}</td>
              <td>
                <button
                  onClick={() => setTask(task.filter((_, i) => i !== index))}
                >
                  delete
                </button>
              </td>
              <td>
                <button
                  onClick={() =>
                    setTask(
                      task.map((t, i) =>
                        i == index ? { ...t, completed: !t.completed } : t,
                      ),
                    )
                  }
                >
                  {item.completed == true ? "undo" : "mark as done"}
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
export default TodoD2;
