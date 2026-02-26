import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = () => {
  const items = [
    {
      title: "JavaScript Basics",
      content: "Learn variables, functions, and loops in JavaScript.",
    },
    {
      title: "React.js Overview",
      content: "Understand components, state, and props in React.",
    },
    {
      title: "Node.js",
      content: "Basics of server-side development with Node.js.",
    },
    {
      title: "Full-Stack Development",
      content: "Build full-stack apps with React and Node.js.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (deleteIndex) => {
    setOpenIndex(openIndex == deleteIndex ? null : deleteIndex);
  };

  return (
    <div className="border bg-white w-120 mx-auto mt-10 rounded-lg shadow-md overflow-hidden">
      {items.map((item, index) => {
        return (
          <div key={index}>
            <button
              onClick={() => handleToggle(index)}
              className="border w-full px-4 py-3 bg-amber-100 hover:bg-amber-200 transition flex justify-between items-center font-medium text-left"
            >
              {item.title}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <p className="px-4 py-3 bg-amber-50 text-gray-700 border-t text-sm">
                {item.content}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
