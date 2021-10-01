import { connect } from 'react-redux'
import {
  getPageSizeSelector,
  getUsersSelector,
} from '../../rdx/users-selectors'
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  ToggleIsFetching,
  unfollow,
  toggleFollowProgress,
  getUsers,
  followThunk,
  unfollowThunk,
} from '../../rdx/usersReducer'
import Users from './usersс'

let mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSelected: state.usersPage.pageSelected,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  ToggleIsFetching,
  toggleFollowProgress,
  getUsers,
  followThunk,
  unfollowThunk,
})(Users)
export default UsersContainer
