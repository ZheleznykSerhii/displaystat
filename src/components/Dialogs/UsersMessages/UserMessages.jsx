import React from 'react'
import s from '../UsersMessages/UserMessages.module.css'

const Message = (props) => {
  return <div className={s.messageItem}>{props.textMessahe}</div>
}

const DialogsMessage = (props) => {
  const messageMap = props.messagesBase.map((m) => (
    <Message textMessahe={m.message} />
  ))

  return (
    <div className={s.content}>
      <div className={s.messages}>{messageMap}</div>
    </div>
  )
}

export default DialogsMessage
