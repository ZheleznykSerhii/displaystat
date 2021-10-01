import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../photos/368549.jpg'

import Preloader from '../common/preloader'
import { NavLink } from 'react-router-dom'

class Users extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0)
      this.props.getUsers(this.props.pageSelected, this.props.pageSize)
  }
  onPostChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    return (
      <div>
        <div>
          <div>{this.props.isFetching ? <Preloader /> : null}</div>
          {pages.map((p) => {
            return (
              <span
                className={
                  this.props.pageSelected === p
                    ? styles.selected
                    : styles.notSelected
                }
                onClick={(pageNumber) => {
                  this.onPostChange(p)
                }}
              >
                {p}
              </span>
            )
          })}
        </div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <NavLink to={'/Content/' + u.id}>
                  {' '}
                  <img
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    className={styles.userphoto}
                  />{' '}
                </NavLink>
              </div>
              {u.followed ? (
                <button
                  disabled={this.props.followingInProgress}
                  onClick={() => {
                    this.props.followThunk(u.id)
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  disabled={this.props.followingInProgress}
                  onClick={() => {
                    this.props.unfollowThunk(u.id)
                  }}
                >
                  UnFollow
                </button>
              )}
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>"u.location.city"</div>
                <div>"u.location.country"</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    )
  }
}

export default Users
