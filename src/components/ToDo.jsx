import React from "react";
import { useState } from "react";

const ToDo = () => {
  const [searchText, setSearchText] = useState("");
  const [taskError, setTaskError] = useState("");

  const [tasks, setTasks] = useState([]);

  const validateTask = (value) => {
    if (value.trim().length <= 2) {
      setTaskError("Invalid Task");
    } else {
      setTaskError("");
    }
  };

  const handleSubmitTask = () => {
    if (searchText.trim().length >= 2) {
      setTasks([...tasks, searchText]);
      setSearchText("");
    }
  };

  const handleDelete = (deleteIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== deleteIndex);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="flex space-x-5 m-10">
        <input
          className="border-2 p-3"
          placeholder="enter task"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onBlur={() => validateTask(searchText)}
        ></input>
        {taskError && <p className="text-red-400 text-3 mt-1">{taskError}</p>}
        <button
          className="bg-amber-400 p-2 rounded-md"
          onClick={handleSubmitTask}
        >
          Add Task
        </button>
      </div>

      <div className="m-10">
        <p className="text-3xl mb-5">Task Lists</p>

        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between w-64 md-2">
            <span className="bg-amber-400 w-64 mb-2 flex ">{task}</span>

            <button
              className="bg-black text-white p-1 mb-1 rounded"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
