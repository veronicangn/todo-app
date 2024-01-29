import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    // Default value is the initial list item
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id);

        // Clears form
        setValue("")
    };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' 
        value = {value} placeholder='Update Task' 
        onChange={(e) => setValue(e.target.value)}/>
        <button type ='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
