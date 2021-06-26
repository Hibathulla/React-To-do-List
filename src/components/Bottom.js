import { useState } from "react";
import "./Bottom.css";
import Form from "./Form/Form";
import Welcome from "./Welcome/Welcome"

const DUMMY_ITEMS = [
  {
    id: 0,
    name: "Read a Book",
  },
  {
    id: 1,
    name: "Check Mail",
  },
  {
    id: 2,
    name: "Clean Room",
  },
];

const Bottom = (props) => {
  
  const [item, setItem] = useState(DUMMY_ITEMS)
  const [theme, setTheme] = useState(false)
  const [enterInput, setEnterInput] = useState(false)

  const welcomeHandler = (items) => {
    setEnterInput(true)
    setItem(prevValue => {
      return [items, ...prevValue]
    })
  }

  const gotInput = (items) => {
    setItem(prevValue => {
      return [items, ...prevValue]
    })
  }

  const deleteHandler = (items) => {
    setItem(prevItem => {
      const updated = prevItem.filter(item => item.name != items)
      return updated;
    })
  }

  const themeHandler = (theme) => {
    if(theme === false) {
      setTheme(true);
    }
    else {
      setTheme(false)
    }
    props.sendTheme(theme)
  }

  return (
    <div className={theme ? "bottom1" : "bottom"}>
    {enterInput ? "" : <Welcome welcome={welcomeHandler} sendTheme={themeHandler} />}
    {enterInput ? <Form name={item} eventHandler={gotInput} sendTheme={themeHandler} deleteOne={deleteHandler} /> : ""}
    
    </div>
  );
};

export default Bottom;
