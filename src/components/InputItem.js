import React from 'react';

// TODO: Add React PropTypes
// TODO: Add drop down arrow and associated functionality

const InputItem = ({ add_todo, handle_input, currentTodo }) => {
  return (
    <div className='todo-input-container'>
      <form
        onSubmit={ e => { e.preventDefault(); add_todo(currentTodo) }}>
        <input className='todo-input' type="text" placeholder='What needs to be done?' value={ currentTodo } onChange={ e => handle_input(e.target.value) } />
      </form>
    </div>
  )
}

export default InputItem;
