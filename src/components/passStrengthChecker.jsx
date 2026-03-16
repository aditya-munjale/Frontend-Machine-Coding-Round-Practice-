import React, { useState } from "react";
import "./styles.css";

// ✅ Export this so it can be tested
export const checkPasswordStrength = (input) => {
  let count = 0;

  if (input.length >= 8) count++;
  if (/[A-Z]/.test(input)) count++;
  if (/[a-z]/.test(input)) count++;
  if (/[0-9]/.test(input)) count++;
  if (/[@#$%]/.test(input)) count++;

  if (count === 1) return "Level 1";
  if (count === 2 || count === 3) return "Level 2";
  if (count === 4 || count === 5) return "Level 3";

  return "Weak Password";
};

const PasswordStrength = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = () => {
    const strength = checkPasswordStrength(input);
    setResult(strength);
  };

  return (
    <div>
      <h2>Password Strength Checker</h2>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Your Password"
        ></input>

        <button onClick={handleClick}>Check</button>
      </div>

      <p>{result}</p>
    </div>
  );
};

export default PasswordStrength;
