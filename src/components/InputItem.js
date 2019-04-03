import React from 'react';

const InputItem = ({ add_todo }) => {
  return (
    <div>
      <form onSubmit={ e =>
        { e.preventDefault();
          add_todo(e.target[0].value);
         }
      }>
        <input type="text"/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default InputItem;
