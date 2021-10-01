import React from 'react'
import s from './dialogUsers.module.css'
import { NavLink } from 'react-router-dom'

const Contact = (props) => {
  return (
    <div className={s.item + ' ' + s.active}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

const DialogsUsers = (props) => {
  const contentMap = props.contentBase.map((d) => (
    <Contact name={d.name} id={d.id} />
  ))

  return (
    <div className={s.content}>
      <div> {contentMap}</div>
    </div>
  )
}

export default DialogsUsers
