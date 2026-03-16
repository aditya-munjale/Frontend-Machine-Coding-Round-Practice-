import React from "react";
import { useState } from "react";

const EvenOrOdd = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleClick = () => {
    if (input === "") {
      setResult("Please Enter a number");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (input % 2 === 0) {
        setResult(`The number ${input} is Even`);
      } else {
        setResult(`The number ${input} is Odd`);
      }

      setLoading(false);
    }, 2000);

    setInput("");
  };

  return (
    <div className="main-container">
      <div className="input-btn">
        <input
          className="input"
          type="number"
          value={input}
          onChange={(e) => {
            setInput(Number(e.target.value));
          }}
          placeholder="Enter a number"
        ></input>

        <button className="btn" onClick={handleClick}>
          Click
        </button>
      </div>

      {loading ? <p>Checking...</p> : <p>{result}</p>}
    </div>
  );
};

export default EvenOrOdd;

/**.main-container {
    background-color: bisque;
    border: 1px solid black;
    margin: 20px;
    padding-left: 75px;
    padding-top: 40px;

}

.input-btn {
    direction: flex;
    flex-direction: column;

}

.input{
    padding: 5px;
}

.btn{
    background-color: black;
    color: white;
    padding: 5px;
    margin-left: 10px;
} */
