import { useState } from 'react';
import './App.css';
import TodoForm from './Todo/TodoForm.jsx';
// import Todo from './Todo/Todo.jsx'
import TodoItem from './Todo/TodoItem'


function App() {
  const [task, setTask] = useState([])

  const addtask = (userInput) => {
    if (userInput) {
      const newItem = {
        taskk: userInput,
      }
      setTask([...task,newItem])
    }
  }

  return (
    <div className="App">
      <header>Список задач:{task.length}</header>
      <TodoForm addtask = {addtask} />
      {task.map(() => {
        return (
          <TodoItem
            task = {task}
          />
        )
      })}
    </div>
  );
}

export default App;
