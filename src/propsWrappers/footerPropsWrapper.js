import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { setViewAll, setViewActive, setViewCompleted, clear_completed } from '../actions/listActions';
import Footer from '../components/Footer';

const mapStateToProps = state => {
  return {
    currentView: state.currentView,
    allTodos: state.listReducer.all,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { setViewAll, setViewActive, setViewCompleted, clear_completed }, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
