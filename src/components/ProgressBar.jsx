import "./styles.css";
import { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleIncrement = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const handleDecrement = () => {
    setProgress((prev) => Math.max(prev - 10, 0));
  };

  const getColour = () => {
    if (progress <= 30) return "red";
    if (progress <= 60) return "orange";
    return "green";
  };

  return (
    <div>
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%`, background: getColour() }}
        >{`${progress}%`}</div>
      </div>
      <div>
        <button onClick={handleIncrement}>Increment + </button>
        <button onClick={handleDecrement}>Decrement - </button>
      </div>
    </div>
  );
};

export default ProgressBar;

/*


.progress-container {
  width: 300px;
  height: 20px;
  background: #eee;
  border-radius: 10px;
  overflow: hidden;
}

.btn {
  background-color: bisque;
}

.progress-bar {
  height: 100%;
  background: green;
  transition: width 0.3s ease;
  text-align: center;
  color: white;
}
*/
