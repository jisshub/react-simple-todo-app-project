import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <h2>Simple Todo App</h2>
      <h3>Please add todo item(s) through the input field</h3>
      <Todo />
    </div>
  );
}

export default App;
