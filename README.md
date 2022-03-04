#### time: 4: 50 


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
