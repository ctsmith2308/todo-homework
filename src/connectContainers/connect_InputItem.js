import { connect } from 'react-redux';
import { add_todo } from '../actions/listActions';
import InputItem from '../components/InputItem';

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch => bindActionCreators(
  { add_todo }, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(InputItem);
