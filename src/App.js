import { useState } from 'react';
import './App.css';
import Todo from './Todo/Todo/Todo.jsx'
import TodoForm from './Todo/TodoForm/TodoForm.jsx'
import List from './Todo/List/List.jsx'



function App() {
  const [count, setCount] = useState([
    { task: '' }
  ])
  const addTodo = (task) => {
    const newTask = [...count, { task }]
    setCount(newTask)
  }
  return (
    <div className="App">
      <div className='list'>
        <div className='task'>
          <List/>
          {count.map((task) => {
            return (
            <Todo className='item' task={task} />
          )
          })}
        </div>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}


export default App;
