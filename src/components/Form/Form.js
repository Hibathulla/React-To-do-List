import { useState } from "react";
import List from "./List";
import "./Form.css";
import iconSun from "../images/icon-sun.svg";
import iconMoon from "../images/icon-moon.svg";

const Form = (props) => {

  const [input, setInput] = useState("")
  const [theme, setTheme] = useState(false)
  const [valid, setValid] = useState(false)

  const themeHandler = () => {
    if(theme === false) {
      setTheme(true);
    }
    else {
      setTheme(false)
    }
    props.sendTheme(theme)
  }

  const changeHandler = (event) => {
    if(event.target.value.trim().length > 0) {
       setValid(false)
    }
    setInput(event.target.value)
  }

  const inputHandler = (event) => {
    if(input.trim().length === 0) {
      setValid(true)
      return;
    }
    if (event.key === "Enter") {
      const data = {
        name: input,
        id: Math.floor(Math.random().toFixed(4) * 10000).toString()
      }
        props.eventHandler(data)
        setInput("")
    }
    
  };

  return (
    <div className={theme ? "toform" : "toform1"}>
      <div className={theme ? "heading" : "heading1"}>
        <h1>Todo</h1>
        <img src={theme ? iconMoon : iconSun} alt="" className="imgs" onClick={themeHandler} />
        <input type="text" onKeyPress={inputHandler} value={input} onChange={changeHandler} placeholder={valid ? "Empty Item Field" : "Add a Item"} style={{background: valid ? "salmon" : ""}} />
      </div>
      <List lists={props.name} hello={theme} onDeleteItem={props.deleteOne} />
    </div>
  );
};

export default Form;
