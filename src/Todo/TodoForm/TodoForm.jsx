import {useState} from 'react'

function TodoForm ({addTodo }) {
    const [value, setValue] = useState('')
  
    const handle = (e) => {
      e.preventDefault();
      addTodo(value);
      setValue('')
    }
    return (
      <form onSubmit = {handle}>
        <input
          value = {value} 
          type="text"
          onChange = {e => setValue(e.target.value) }
        />
      </form>
    )
  }
  export default TodoForm;