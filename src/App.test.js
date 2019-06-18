import React from 'react';
import ReactDOM from 'react-dom';

import listReducer from './reducers/listReducer.js';

//TODO: // Write actions tests

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(listReducer(undefined, {})).toEqual(
      {
        currentView: 'all',
        currentTodo: '',
        all: [],
        counter: 0
      }
    )
  });

  it('should handle ADD_TODO', () => {
    let state = {
      all: [],
      currentTodo: '',
      counter: 0
    };
    let action = {
      type: 'add_todo',
      payload: 'Some todo'
    };
    expect(
      listReducer(state, action)
    ).toEqual({
      all: [ { id: 0, todo: 'Some todo', completed: false } ],
      counter: 1,
      currentTodo: ''
    })
  })

  it('should handle COMPLETE_TODO', () => {
    let state = {
      all: [{ id: 1, todo: 'Some todo', completed: false }],
      currentTodo: '',
    };
    let action = {
      type: 'complete_todo',
      payload: 1
    };
    expect(
      listReducer(state, action)
    ).toEqual({
      all: [ { id: 1, todo: 'Some todo', completed: true } ],
      currentTodo: ''
    })
  })

  it('should handle RE_ADD_TODO', () => {
    let state = {
      all: [{ id: 1, todo: 'Some todo', completed: true }],
      currentTodo: '',
    };
    let action = {
      type: 're_add_todo',
      payload: 1
    };
    expect(
      listReducer(state, action)
    ).toEqual({
      all: [ { id: 1, todo: 'Some todo', completed: false } ],
      currentTodo: ''
    })
  })

  it('should handle EDIT_TODO', () => {
    let state = {
      all: [{ id: 1, todo: 'Some todo', completed: true }],
      currentTodo: '',
    };
    let action = {
      type: 'edit_todo',
      payload: {
        id: 1,
        value: 'Updated todo'
      }
    };
    expect(
      listReducer(state, action)
    ).toEqual({
      all: [ { id: 1, todo: 'Updated todo', completed: true } ],
      currentTodo: ''
    })
  })

  it('should handle DELETE_TODO', () => {
    let state = {
      all: [{ id: 1, todo: 'Some todo', completed: true }]
    };
    let action = {
      type: 'delete_todo',
      payload: 1
    };
    expect(
      listReducer(state, action)
    ).toEqual({
      all: [],
    })
  })

  it('should handle CLEAR_COMPLETED', () => {
    let state = {
      all: [{ id: 0, todo: 'Some todo', completed: true }, { id: 1, todo: 'Another todo', completed: false }]
    };
    let action = {
      type: 'clear_completed'
    };
    expect(
      listReducer(state, action)
    ).toEqual({
      all: [{ id: 1, todo: 'Another todo', completed: false }],
    })
  })
})
