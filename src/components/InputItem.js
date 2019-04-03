import React from 'react';
import { connect } from 'react-redux';
import { add_todo } from '../actions/listActions';

const InputItem = ({ dispatch }) => {
  return (
    <div>
      <form onSubmit={ e =>
        { e.preventDefault();
          dispatch(add_todo(e.target[0].value));
         }
      }>
        <input type="text"/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default connect()(InputItem);
