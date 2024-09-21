import Effect from "./hooks/effects/Effect"
import { useState } from "react";
import "./App.css"
import { Task } from "./Task";


export default function App() {
  const [todoList,setTodoList] = useState([]);
  const [newTask,setNewTask] = useState("");


  const handleChange = (event) => {
    setNewTask(event.target.value);
    
  }

  const add = () => {
    const task = {
      id: todoList.length===0 ? 1 : todoList[todoList.length-1].id + 1,
      taskName:newTask,
      completed:false,
    }
  
    setTodoList([...todoList,task]);

  }

  const deleteTask = (id) => {

setTodoList(todoList.filter((task)=>task.id===id))

  }

  const completedTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed }; // Toggle completed status
        } else {
          return task;
        }
      })
    );
  };
  






  return (
     <div className="App">

      <div className="addTask">
        <input onChange={handleChange} type="text" />
        <button onClick={add}>Add Task</button>

      </div>
      <div className="list">
  {todoList.map((task) => {
    return <Task
     taskName={task.taskName}
     id={task.id}
     deleteTask={deleteTask}
     completed={task.completed}
     completedTask={completedTask}/>
  })}
</div>
      

     </div>

  )


}




