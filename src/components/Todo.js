import React from 'react';
import { connect } from 'react-redux';
import { add_todo } from '../actions/listActions';
import InputItem from './InputItem';

const Todo = () => (
  <div>
    <InputItem/>
  </div>
)

export default Todo;
