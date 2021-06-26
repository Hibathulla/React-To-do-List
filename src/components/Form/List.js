import NewList from "./NewList"
import "./List.css"
import { useState } from "react"


const List = (props) => {

  const [strikeNo, setStrikeNo] = useState("")


  return (
    <div className={props.hello ? "list1" : "list"} >
    <li>
    {props.lists.length === 0 && <p className="empty-list">No List Found.</p>}
    {props.lists.length > 0 && props.lists.map(list => {
     return <NewList 
     theme={props.hello}
     key={list.id}
     id={list.id}
      name={list.name}
      onDelete={props.onDeleteItem}
      />
    })}
    </li>
    {/* <NewList 
      name={props.lists[0].name}
    />
    <NewList 
      name={props.lists[1].name}
    />
    <NewList 
      name={props.lists[2].name}
    /> */}
   </div>
  )
}

export default List;