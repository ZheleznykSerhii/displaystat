import React from 'react'
import classes from './Post.module.css'

const PostMessage = (props) => {
  return (
    <div>{` ${props.userNeme} - ${props.text} likes: ${props.likes} `}</div>
  )
}

const Post = (props) => {
  const PostMap = props.postMessageBase.map((m) => (
    <PostMessage userNeme={m.userNeme} text={m.text} likes={m.likes} />
  ))
  return <div className={classes.item}>{PostMap}</div>
}

export default Post
