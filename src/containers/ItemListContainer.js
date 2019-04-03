import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { add_todo, complete_todo, edit_todo, delete_todo } from '../actions/listActions';
import ItemList from '../components/ItemList';

const mapStateToProps = (state) => {
  return { active: state.listReducer.active }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { add_todo, complete_todo, edit_todo, delete_todo }, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
