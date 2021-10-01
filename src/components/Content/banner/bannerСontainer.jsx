import { connect } from 'react-redux'
import {
  addPostToBanner,
  updateNewPostBanner,
  SetProfile,
  GetStatusThunk,
  SetStatus,
  updateStatusThunk,
  getProfileThunk,
} from '../../../rdx/message_reducer'

import Banner from './banner'

let mapStateToProps = (state) => {
  return {
    NewPostBanner: state.UsersAndDialogsBase.NewPostBanner,
    postMessageBase: state.UsersAndDialogsBase.postMessageBase,
    profile: state.UsersAndDialogsBase.profile,
    status: state.UsersAndDialogsBase.status,
  }
}

const BannerContainer = connect(mapStateToProps, {
  addPostToBanner,
  updateNewPostBanner,
  SetProfile,
  GetStatusThunk,
  SetStatus,
  updateStatusThunk,
  getProfileThunk,
})(Banner)

export default BannerContainer
