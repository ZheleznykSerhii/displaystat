import { networkUsersAPI } from '../components/API/api'

let SET_AUTH_DATA = 'SET_AUTH_DATA'

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      }

    default:
      return state
  }
}

export let setAuthData = (id, email, login) => {
  return { type: SET_AUTH_DATA, data: { id, email, login } }
}

export const headerThunk = (dispatch) => {
  networkUsersAPI.header.then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data
      dispatch(setAuthData(id, email, login))
    }
  })
}

export default authReducer
