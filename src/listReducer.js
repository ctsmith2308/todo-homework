const initialState = {
  active: [],
  completed: [],
  all: []
}

const listReducer = (state = initialState, action) => {
  switch(action.type){
    case 'add_todo':
      return {...state, active: [...state.active, action.payload]}
    default:
    return state
  }
}

export default listReducer;
