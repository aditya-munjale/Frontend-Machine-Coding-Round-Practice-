import React from "react";

const Input = (props) => {
  return (
    <div className="mb-3">
      <input
        className="border rounded"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
};

export default Input;
