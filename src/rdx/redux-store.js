import { applyMiddleware, combineReducers, createStore } from 'redux'
import authReducer from './auth_reducer'
import bannerReducer from './message_reducer'
import reducerPost from './post_reducer copy'
import usersReducer from './usersReducer'
import thunkMiddleware from 'redux-thunk'
import kursReducer from './kurs_reducer'

let reducers = combineReducers({
  UsersAndDialogsBase: bannerReducer,
  UsersAndDialogs: reducerPost,
  usersPage: usersReducer,
  UserAuth: authReducer,
  ExchangeNBU: kursReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store
