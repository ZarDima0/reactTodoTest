import { useState } from 'react'

import "./TodoForm.css";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('')

  const handle = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue('')
  }
  return (
    <div className='wrapper'>
      <div className="title">
        <h3>Добавить Дело</h3>
      </div>
      <div className='wrapper_form'>
        <form onSubmit={handle}>
          <input
            value={value}
            type="text"
            onChange={e => setValue(e.target.value)}
          />
          <button>Добавить дело</button>
        </form>
      </div>


    </div>

  )
}
export default TodoForm;