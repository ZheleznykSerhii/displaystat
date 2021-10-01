import axios from 'axios'
import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../photos/368549.jpg'

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
          props.setUsers(response.data.items)
        })
    }
  }
  return (
    <div>
      <button onClick={getUsers}>List of users</button>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                className={styles.userphoto}
              />
            </div>
            {u.followed ? (
              <button
                onClick={() => {
                  props.unfollow(u.id)
                }}
              >
                Follow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(u.id)
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

export default Users
