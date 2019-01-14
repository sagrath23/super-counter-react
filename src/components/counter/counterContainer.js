import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'
import counter from './counter'

const mapStateToProps = (state) => {
  console.log(state, 'da state');

  return {count: state.counter}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(counter)
