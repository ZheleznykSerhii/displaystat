import { connect } from 'react-redux'

import Music from '../music/music'
import authredirectComponent from '../Hoc/withauthrediect'
import { compose } from 'redux'

const mapStateToProps = (state) => {
  return {
    isAuth: state.UserAuth.isAuthTEST,
  }
}

export default compose(
  connect(mapStateToProps, {}),
  authredirectComponent
)(Music)
