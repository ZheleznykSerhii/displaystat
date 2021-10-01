import React from 'react'
import Preloader from '../../common/preloader'

import Post from '../MyPosts/Post'
import classes from './banner.module.css'
import BannerStatus from './bannerStatus'
import BannerStatusWithHooks from './bannerStatusHoook'

const Banner = (props) => {
  let newPostElement = React.createRef()

  let commentInput = () => {
    props.addPostToBanner()
  }
  let bannerChange = () => {
    let banner = newPostElement.current.value
    props.updateNewPostBanner(banner)
  }
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img
          className={classes.banner}
          src="https://cdna.artstation.com/p/assets/images/images/017/179/448/medium/patrick-tucker-img-20190124-003759-455.jpg?1554934533"
        />
      </div>
      <div>
        <BannerStatusWithHooks
          status={props.status}
          updateStatusThunk={props.updateStatusThunk}
        />
      </div>
      <img src={props.profile.photos.large}></img>
      <h3 className={classes.item}>My posts</h3>
      <div>
        <textarea
          ref={newPostElement}
          value={props.NewPostBanner}
          onChange={bannerChange}
        ></textarea>
      </div>
      <div>
        <button onClick={commentInput}>Add post</button>
      </div>
      <Post postMessageBase={props.postMessageBase} />
    </div>
  )
}

export default Banner
