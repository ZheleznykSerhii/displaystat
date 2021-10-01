import React from 'react'
import { connect } from 'react-redux'
import {
  addMessageToArrey,
  updateNewPostText,
} from '../../rdx/post_reducer copy'
import Dialogs from './dialogs'

let mapStateToProps = (state) => {
  return {
    messagesBase: state.UsersAndDialogs.messagesBase,
    contentBase: state.UsersAndDialogs.contentBase,
    NewPostText: state.UsersAndDialogs.NewPostText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    SendMessage: () => {
      dispatch(addMessageToArrey())
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostText(text))
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
