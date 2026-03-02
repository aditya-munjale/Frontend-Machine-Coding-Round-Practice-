import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="bg-amber-200 p-1 border shadow shadow-amber-700" onClick={props.onClick}>{props.value}</button>
    </div>
  );
};

export default Button;
