import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { add_todo } from '../actions/listActions';
import InputItem from '../components/InputItem';

const mapStateToProps = (state) => {
  return { active: state.listReducer.active }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { add_todo }, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(InputItem);
