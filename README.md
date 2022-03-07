#### time: 11: 30 


## Create a Todo Component
```js
export default function Todo() {
  return (
    <div className="todo">
        <input type="text" name="text" id="text" placeholder="Add todo..." />
        <button className="">Submit</button>    
    </div>

  )
}

```

## Inject Todo Component in App.js

```js
<Todo />
```

## Create a state to store the input field value.

- Create a state to store and update the input.
- In input field, onChange event listener is set to update the state.

```js
const [task, setTask] = useState('');
const handleChange = (e) => {
  setTask(e.target.value);
}
return (
  <div className="todo">
      <input
        type="text" 
        name="text" 
        id="text" 
        onChange={(e)=>handleChange(e)} 
        placeholder="Add todo..."
      />
      <button className="">Submit</button>    
  </div>
)
```

## Create onClick event listener to submit the task.

```jsx
const submitTask = () => {
  console.log(task)
}

<button className="" onClick={submitTask}>Submit</button>    
```


## Create state to deal with list of todos

```js
const [tasks, setTasks] = useState([]);
const submitTask = () => {
    if (task) {
      const taskDetails = {
        id: Math.floor(Math.random()*1000),
        task: task,
        completed: false
      }
      setTasks([...tasks, taskDetails]);
    }
  }
  console.log(tasks)
```

## Show the list of todos in template

```jsx
{
  tasks !== [] ? (
    <ul>
      {tasks.map((task, index) => (
        <div id={task.id}>
          <li className="">{task.taskValue}</li>
        </div>
      ))    
    }
    </ul>
  ): null 
}
```

## Delete Task from todolist

```jsx
const handleDelete = (id) => {
  setTasks((tasks) =>  { 
    tasks.filter(task => task.id !== id);
    })
}

<button className="delete" 
  onClick={() => handleDelete(task.id)}>
  Delete
</button>
```

