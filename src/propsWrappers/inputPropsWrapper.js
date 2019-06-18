import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { add_todo, handle_input } from '../actions/listActions';
import InputItem from '../components/InputItem';

const mapStateToProps = state => {
  return {
    currentView: state.currentView,
    all: state.listReducer.all,
    currentTodo: state.listReducer.currentTodo
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { add_todo, handle_input }, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(InputItem);
