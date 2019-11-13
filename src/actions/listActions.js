export const handle_input = input => ({
  type: 'handle_input',
  payload: input
})

export const add_todo = todo => ({
  type: 'add_todo',
  payload: todo
})

export const complete_todo = id => ({
  type: 'complete_todo',
  payload: id
});

export const re_add_todo = id => ({
  type: 're_add_todo',
  payload: id
})

export const edit_todo = (id, value) => ({
  type: 'edit_todo',
  payload: {
    id,
    value: value
  }
});

export const delete_todo = id => ({
  type: 'delete_todo',
  payload: id
})

export const clear_completed = () => ({
  type: 'clear_completed'
})

export const setViewAll = (history) => {
  history.push('/#/all');
  return { type: 'view_all' }
}

export const setViewActive = (history) => {
  history.push('/#/active')
  return { type: 'view_active' }
}

export const setViewCompleted = (history) => {
  history.push('/#/completed')
  return { type: 'view_completed' }
}
