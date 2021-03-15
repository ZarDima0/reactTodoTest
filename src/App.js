import { useState } from 'react';
import './App.css';
import Todo from './Todo/Todo/Todo.jsx'
import TodoForm from './Todo/TodoForm/TodoForm.jsx'


function App() {
  const [count, setCount] = useState([
    { task: '' }
  ])
  const addTodo = (task) => {
    const newTask = [...count,{task}]
    setCount(newTask)
  }
  return (
    <div className="App">
      <div className= 'list'>
        <TodoForm addTodo = {addTodo}  />
        {count.map(task => (<Todo
          task={task}
        />
        ))}
      </div>
    </div>
  );
}

export default App;
