import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

const authredirectComponent = (Component) => {
  const mapStateToProps = (state) => {
    return {
      isAuth: state.UserAuth.isAuth,
    }
  }

  class RedicrectComponent extends React.Component {
    render() {
      if (this.props.isAuth) return <Redirect to={'/login'} />
      return <Component {...this.props} />
    }
  }
  let connectAuthRedirect = connect(mapStateToProps)(RedicrectComponent)
  return connectAuthRedirect
}

export default authredirectComponent
