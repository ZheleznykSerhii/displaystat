import { profileAPI } from '../components/API/api'

let ADD_POST_TO_BANNER = 'ADD-POST-TO-BANNER'
let UPDATE_NEW_POSTBANNER = 'UPDATE-NEW-POST-BANNER'
let SET_PROFILE = 'SET_PROFILE'
let SET_STATUS = 'SET_STATUS'

let initialState = {
  postMessageBase: [
    { userNeme: 'Serhii', text: 'how are you?', likes: 3 },
    { userNeme: 'Alla', text: 'Nice are you?', likes: 2 },
  ],

  NewPostBanner: 'Come, fly with me',
  profile: null,
  status: '',
}

const bannerReducer = (state = initialState, action) => {
  let stateCopy = { ...state, postMessageBase: [...state.postMessageBase] }
  let body = stateCopy.NewPostBanner
  switch (action.type) {
    case ADD_POST_TO_BANNER:
      return {
        ...state,
        NewPostBanner: '',
        postMessageBase: [
          ...state.postMessageBase,
          { userNeme: 'ola, daga-daga', text: body, likes: 3 },
        ],
      }

    case UPDATE_NEW_POSTBANNER:
      let NewPostBanner = state.NewPostBanner
      return {
        ...state,
        NewPostBanner: action.newBanner,
      }
    case SET_PROFILE:
      return { ...state, profile: action.profile }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }
    default:
      return state
  }
}

export let addPostToBanner = () => {
  return { type: ADD_POST_TO_BANNER }
}

export let updateNewPostBanner = (banner) => {
  return { type: UPDATE_NEW_POSTBANNER, newBanner: banner }
}
export let SetProfile = (profile) => {
  return { type: SET_PROFILE, profile }
}
export const SetStatus = (status) => {
  return { type: SET_STATUS, status }
}

export const GetStatusThunk = (userID) => {
  return (dispatch) => {
    profileAPI.getStatus(userID).then((response) => {
      dispatch(SetStatus(response.data))
    })
  }
}

export const updateStatusThunk = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(SetStatus(status))
    }
  })
}

export const getProfileThunk = (userID) => {
  return (dispatch) => {
    profileAPI.getProfile(userID).then((response) => {
      dispatch(SetProfile(response.data))
    })
  }
}

export default bannerReducer
