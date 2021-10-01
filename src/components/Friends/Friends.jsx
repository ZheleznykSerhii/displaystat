import React from 'react'
import classes from './friends.module.css'

const FriendsPost = (props) => {
  return <div>{`  ${props.userNeme}  `}</div>
}

const Friends = (props) => {
  const PostMap = props.listOffriends.map((m) => (
    <FriendsPost userNeme={m.userNeme} />
  ))
  return <div className={classes.item}>{PostMap}</div>
}

export default Friends
