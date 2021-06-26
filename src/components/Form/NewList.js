import { useState } from "react";
import "./List.css"

const NewList = (props) => {

   const [strike, setStrike] = useState(false)

   const deleteFunction = () => {
      props.onDelete(props.name)
   }

   const strikeHandler = () => {
      if(strike === false) {
         setStrike(true)
      }
      else {
         setStrike(false)
      }
   }

   return ( 
<div className={props.theme ? "enteredList1" : "enteredList"}>
<ul>
   <input type="checkbox" id={props.name} onClick={strikeHandler} />
      <label className={strike ? "done" : ""} onClick={deleteFunction}>{props.name}</label>
      </ul>
    </div>
   
   
    
   )
}

export default NewList;