import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { SetProfile } from '../../rdx/message_reducer'

import { getProfileThunk, GetStatusThunk } from '../../rdx/message_reducer'

import BannerContainer from './banner/bannerСontainer'

class Content extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID
    if (!userID) {
      userID = 19091
    }

    this.props.getProfileThunk(userID)

    this.props.GetStatusThunk(userID)
  }

  render() {
    return (
      <div>
        <BannerContainer
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    )
  }
}
let MapStatetoProps = (state) => ({
  profile: state.UsersAndDialogsBase.profile,
  status: state.UsersAndDialogsBase.status,
})

let WithUrlDataContainerComponent = withRouter(Content)

export default connect(MapStatetoProps, { getProfileThunk, GetStatusThunk })(
  WithUrlDataContainerComponent
)
