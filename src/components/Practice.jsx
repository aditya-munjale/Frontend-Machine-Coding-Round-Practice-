import React from "react";
import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [getText, setGetText] = useState("");
  const [checked, setChecked] = useState([]);
  const [textError, setTextError] = useState("");

  const handleTaskError = (text) => {
    if (text.trim().length <= 3) {
      setTextError("Enter a task");
      return false;
    } else {
      setTextError("");
      return true;
    }
  };

  const handleClick = () => {
    if (!handleTaskError(getText)) return;

    setTasks([...tasks, getText]);
    setChecked([...checked, false]);
    setGetText("");
  };

  const handleCheckBox = (index) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
  };

  const handleDelete = (deletedIndex) => {
    const updatedTasks = tasks.filter((_, index) => {
      return index !== deletedIndex;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={getText}
          onChange={(e) => {
            setGetText(e.target.value);
            handleTaskError(e.target.value);
          }}
          placeholder="enter task"
          className="border px-3 py-2 rounded-md outline-none"
        />

        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add
        </button>
      </div>

      {textError && <p className="text-red-500 mb-2">{textError}</p>}

      <ul className="w-80">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between border p-2 mb-2 rounded-md"
          >
            <div className="flex items-center gap-2">
              <input type="checkbox" onClick={() => handleCheckBox(index)} />

              <span
                className={checked[index] ? "line-through text-gray-400" : ""}
              >
                {task}
              </span>
            </div>

            <button
              onClick={() => handleDelete(index)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
