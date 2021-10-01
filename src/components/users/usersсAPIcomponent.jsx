import axios from 'axios'
import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../photos/368549.jpg'

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageSelected}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.setUsers(response.data.items)
          this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
  }
  onPostChange = (pageNumber) => {
    this.props.pageSelectedByUser(pageNumber)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
  }
}
return <Users />

export default UsersAPIContainer
