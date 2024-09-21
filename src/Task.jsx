import React from 'react'

export function Task(props) {
  return (
    <div className="container">
   

    
    
      <h1 className="item-1"   style={{backgroundColor: props.completed ? "green" : "white" }}    >
        {props.taskName}
        </h1>
      <button onClick={()=>{props.completedTask(props.id)}}>complete</button>
      <button onClick={()=>props.deleteTask(props.id)}>Delete</button>
    </div>
  );
}

