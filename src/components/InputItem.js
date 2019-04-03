import React from 'react';
import { connect } from 'react-redux';
import { add_todo } from '../actions/listActions';

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
