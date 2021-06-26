import { useState } from "react";
import "./Welcome.css";
import iconSun from "../images/icon-sun.svg";
import iconMoon from "../images/icon-moon.svg";
import Todo from "./Todo-icon2.png"

const Welcome = (props) => {
  const [theme, setTheme] = useState(false);

  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  const themeHandler = () => {
    if(theme === false) {
      setTheme(true);
    }
    else {
      setTheme(false)
    }
    props.sendTheme(theme);
  }

  const inputHandler = (event) => {
    if (event.key === "Enter") {
      const data = {
        name: input,
        id: Math.floor(Math.random().toFixed(4) * 10000).toString(),
      };
      console.log(data);
      props.welcome(data);
    }
  };

  return (
    <div className={`welcome ${theme ? "invert" : ""}`}>
      <img src={theme ? iconSun : iconMoon} alt="" className="imgs" onClick={themeHandler} />
      <h1>Todo List</h1>
      <img src={Todo} alt="todo" className="todo-image" />
      <div className="labelIn">
      <p className="label">Type in below field 👇 to add your List</p>
      <input
        className="welcomeInput"
        type="text"
        onKeyPress={inputHandler}
        onChange={changeHandler}
        placeholder="Enter a Item to Display"
      />
      </div>
    </div>
  );
};

export default Welcome;
