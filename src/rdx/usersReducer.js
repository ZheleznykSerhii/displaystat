import { networkUsersAPI } from '../components/API/api.js'

let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET_USERS'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
let FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS'

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  pageSelected: 1,
  isFetching: true,
  followingInProgress: false,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true }
          }
          return u
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false }
          }
          return u
        }),
      }
    case SET_USERS:
      return { ...state, users: action.users }
    case SET_CURRENT_PAGE:
      return { ...state, pageSelected: action.pageSelected }
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.totalCount }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    case FOLLOWING_PROGRESS:
      return { ...state, followingInProgress: action.isFollowing }
    default:
      return state
  }
}

export const follow = (userID) => {
  return { type: FOLLOW, userID }
}
export let unfollow = (userID) => {
  return { type: UNFOLLOW, userID }
}
export let setUsers = (users) => {
  return { type: SET_USERS, users }
}
export const setCurrentPage = (pageSelected) => {
  return { type: SET_CURRENT_PAGE, pageSelected }
}
export const setTotalUsersCount = (totalCount) => {
  return { type: SET_TOTAL_COUNT, totalCount }
}
export const ToggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching }
}
export const toggleFollowProgress = (isFollowing) => {
  return { type: FOLLOWING_PROGRESS, isFollowing }
}
export default usersReducer

export const getUsers = (pageSelected, pageSize) => {
  return (dispatch) => {
    dispatch(ToggleIsFetching(true))
    networkUsersAPI.getUsers(pageSelected, pageSize).then((data) => {
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
      dispatch(ToggleIsFetching(false))
    })
  }
}

export const followThunk = (userID) => {
  return (dispatch) => {
    dispatch(toggleFollowProgress(true))

    networkUsersAPI.follow(userID).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollow(userID))
      }
      dispatch(toggleFollowProgress(false))
    })
  }
}

export const unfollowThunk = (userID) => {
  return (dispatch) => {
    dispatch(toggleFollowProgress(true))

    networkUsersAPI.unfollow(userID).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(follow(userID))
      }
      dispatch(toggleFollowProgress(false))
    })
  }
}
