import React from 'react';
import { connect } from 'react-redux';
import { add_todo } from '../actions/listActions';
import InputItemContainer from '../containers/InputItemContainer';
import ItemListContainer from '../containers/ItemListContainer';

const Todo = () => (
  <div>
    <InputItemContainer/>
    <ItemListContainer/>
  </div>
)

export default Todo;
