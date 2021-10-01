import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { setAuthData } from '../../rdx/auth_reducer'
import { networkUsersAPI } from '../API/api'

class HeaderContainer extends React.Component {
  componentDidMount() {
    networkUsersAPI.header().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        this.props.setAuthData(id, email, login)
      }
    })
  }
  render() {
    return <Header {...this.props} />
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.UserAuth.isAuth,
  login: state.UserAuth.login,
})

export default connect(mapStateToProps, {
  setAuthData,
})(HeaderContainer)
