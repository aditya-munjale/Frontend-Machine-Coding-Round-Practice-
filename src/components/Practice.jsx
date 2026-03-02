import React, { useState } from "react";

const App = () => {
  const arr = [
    "Play Cricket",
    "Play video game",
    "Play Gotya",
    "Play football",
  ];

  const [list, setList] = useState(arr);
  const [openIndex, setOpenIndex] = useState(null);

  const handleDelete = (deleteIndex) => {
    const updatedList = list.filter((_, index) => {
      return index !== deleteIndex;
    });

    setList(updatedList);
  };

  const handleCheckbox = (deleteIndex) => {
    setOpenIndex(openIndex === deleteIndex ? null : deleteIndex);
  };

  return (
    <div>
      {list.map((item, index) => {
        return (
          <div className="flex flex-row space-x-4 m-10" key={index}>
            <li>
              <input
                onClick={() => handleCheckbox(index)}
                type="checkbox"
              ></input>
              {item}

              {openIndex === index && (
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-black text-white rounded p-1"
                >
                  Delete
                </button>
              )}
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default App;
