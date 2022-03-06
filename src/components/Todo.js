import { useState } from "react"

export default function Todo() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  }
  const submitTask = () => {
    if (task) {
      const taskDetails = {
        id: Math.floor(Math.random()*1000),
        taskValue: task,
        completed: false
      }

      setTasks([...tasks, taskDetails]);
    }
  }
  console.log(tasks)

  const handleDelete = (id) => {
    setTasks((tasks) =>  {
      return tasks.filter(task => task.id !== id);
      });
  }

  return (
    <div className="todo">
        <input
          type="text" 
          name="text" 
          id="text" 
          onChange={(e)=>handleChange(e, task.id)} 
          placeholder="Add todo ..."
        />
        <button className="" onClick={submitTask}>Submit</button>    
        {tasks ?
          tasks.map((task, index) => (
            <div key={task.id}>
              <h3>{task.taskValue}</h3>
              <button onClick={()=>handleDelete(task.id)}>Delete Task</button>
            </div>
          ))
          : null
        }
    </div>
  )
}
