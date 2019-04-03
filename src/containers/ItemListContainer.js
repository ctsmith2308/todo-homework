import { connect } from 'react-redux';
import { add_todo } from '../actions/listActions';
import ItemList from '../components/ItemList';

const mapStateToProps = (state) => {
  return { active: state.listReducer.active }
}

const mapDispatchToProps = dispatch => (
  { add_todo: (value) => dispatch(add_todo(value)) }
)

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);