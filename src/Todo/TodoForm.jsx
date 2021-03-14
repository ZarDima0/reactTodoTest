import React, { useState } from "react"
function TodoForm ({addtask}) {
    const [userInput, setUserInput] = useState('')

    const handlerChange = e => {
        setUserInput(e.currentTarget.value)
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        addtask(userInput)
        setUserInput('')
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handlerSubmit(e)
        }
    }

    return (
        <form onSubmit = {handlerSubmit} >
            <input  
            value = {userInput}
            type = 'text'
            onChange = {handlerChange}
            onKeyDown = {handleKeyPress}
            type="text"/>
            <button>сохранить</button>
        </form>
    )
}
export default TodoForm;