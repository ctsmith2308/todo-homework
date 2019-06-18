import React from 'react';

// TODO: make this a functional component somehow
// TODO: Add React PropTypes

class ItemList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      editingKey: null,
    }
  }

  toggleEditKey = id => {
    this.setState({
      editingKey: id,
    })
  }
// TODO: REFACTOR as it kind of works found other examples online
  handleToggler = (item, editTodo) => {
    if(item.id === this.state.editingKey){
      return (
        <div>
          <form
            onSubmit={ e =>
            {
              e.preventDefault();
              editTodo(item.id, e.target[0].value);
              this.setState({
                editingKey: null
              })
            }
          }>
            <input type="text" placeholder={item.todo}/>
          </form>
        </div>
      )
    } else {
      return (
        <div onDoubleClick={() => this.toggleEditKey(item.id)}>{item.todo}</div>
      )
    }
  }
// TODO: Move this to listPropsWrapper as a filtered function
  setTodos = (props) => {
    let toggler;
    switch(props.currentView) {
      case 'all':
        toggler = props.all
        break;
      case 'active':
        toggler = props.all.filter( item => !item.completed )
        break;
      case 'completed':
        toggler = props.all.filter( item => item.completed )
        break;
      }
      return (
        // TODO: extract this out to other component
        toggler.map((item, idx) => (
          <li className='todo-item-container' key={idx}>
            <div className='complete-button-container'>
              {/* TODO: Add classNames to toggle completed states styling with strikethrough */}
                <button onClick={ item.completed ?
                  () => this.props.re_add_todo(item.id) :
                  () =>  this.props.complete_todo(item.id)}>
                  { item.completed ? 'Re-add' : 'Complete' }
                </button>
            </div>
            <div className='todo-text-container'>
              { this.handleToggler(item, this.props.edit_todo) }
            </div>
            <div className ='delete-button-container'>
              <button onClick = {() => this.props.delete_todo(item.id)}>
                Delete
              </button>
            </div>
          </li>
        ))
      )
    }


  render(){
    return (
      <ul className='todo-list-container'>
        { this.setTodos(this.props) }
      </ul>
    )
  }
}

export default ItemList;
