const initialState = {
  currentTodo: '',
  currentView: 'all',
  all: [],
  counter: 0
}

const listReducer = (state = initialState, action) => {
  switch(action.type){
    case 'handle_input':
      return {
        ...state,
        currentTodo: action.payload
      }
    case 'add_todo':
      return {
        ...state,
        currentTodo: '',
        all: [ ...state.all,
          { id: state.counter ++, todo: action.payload, completed: false }
        ]
      }
    case 'complete_todo':
      return {
        ...state,
        all: state.all.map(item => item.id === action.payload ? { ...item, completed: true } : { ...item } ),
      }
    case 're_add_todo':
      return {
        ...state,
        all: state.all.map(item => item.id === action.payload ? { ...item, completed: false } : { ...item } ),
      }
    case 'edit_todo':
      return {
        ...state,
        all: state.all.map(item => item.id === action.payload.id ? { ...item, todo: action.payload.value } : { ...item } ),
      }
    case 'delete_todo':
      return {
        ...state,
        all: state.all.filter(item => item.id !== action.payload),
      }
    case 'clear_completed':
      return {
        ...state,
        all: state.all.filter(item => item.completed === false),
      }
    case 'view_all':
      return {
        ...state,
        currentView: 'all',
      }
    case 'view_active':
      return {
        ...state,
        currentView: 'active',
      }
    case 'view_completed':
      return {
        ...state,
        currentView: 'completed',
      }
    default:
      return state
  }
}

export default listReducer;
