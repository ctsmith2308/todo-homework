import React from 'react';
import { connect } from 'react-redux';
import { add_todo } from './listActions';

const Todo = () => (
    <h1>Im the app!</h1>
)

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch => ({
  add_todo: id => dispatch(add_todo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
