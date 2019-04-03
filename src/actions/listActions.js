export const add_todo = item => {
  return {
      type: 'add_todo',
      payload: item
  }
};

export const complete_todo = idx => ({
    type: 'complete_todo',
    payload: idx
});

export const edit_todo = (idx, value) => ({
    type: 'edit_todo',
    payload: value
});

export const delete_todo = idx => ({
    type: 'delete_todo',
    payload: idx
})
