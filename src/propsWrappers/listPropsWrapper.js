import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { add_todo, re_add_todo, complete_todo, edit_todo, delete_todo } from '../actions/listActions';
import ItemList from '../components/ItemList';

const mapStateToProps = state => {
  return {
    currentView: state.listReducer.currentView,
    currentListView: state.listReducer.currentListView,
    all: state.listReducer.all,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { add_todo,re_add_todo, complete_todo, edit_todo, delete_todo }, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
