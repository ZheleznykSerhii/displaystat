import React from 'react'

import s from './dialog.module.css'
import DialogsUsers from './DialogUsers/dialogsUsers'
import DialogsMessage from './UsersMessages/UserMessages'

const Dialogs = (props) => {
  let messageRef = React.createRef()

  let addMessage = () => {
    props.SendMessage()
  }

  let textChange = () => {
    let text = messageRef.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={s.content}>
      <div className={s.dialogItems}>
        <DialogsUsers contentBase={props.contentBase} />
      </div>

      <div className={s.messages}>
        <DialogsMessage
          messagesBase={props.messagesBase}
          AddMessageToTheBase={props.AddMessageToTheBase}
        />
        <textarea
          ref={messageRef}
          value={props.NewPostText}
          onChange={textChange}
        ></textarea>
        <button onClick={addMessage}>add the message</button>
      </div>
    </div>
  )
}

export default Dialogs
