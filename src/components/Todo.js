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
      tasks.filter(task => task.id !== id);
      })
  }

  return (
    <div className="todo">
        <input
          type="text" 
          name="text" 
          id="text" 
          onChange={(e)=>handleChange(e)} 
          placeholder="Add todo ..."
        />
        <button className="" onClick={submitTask}>Submit</button>    
          {
          tasks !== [] ? (
            <ul>
              {tasks.map((task, index) => (
                <div id={task.id}>
                  <li className="">{task.taskValue}</li>
                  <button className="delete" 
                          onClick={() => handleDelete(task.id)}>
                    Delete
                  </button>
                </div>
              ))  
            }
            </ul>
          ): null 
          }

    </div>
  )
}
