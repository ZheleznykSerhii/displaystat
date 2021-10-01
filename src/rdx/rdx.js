import bannerReducer from './message_reducer'
import reducerPost from './post_reducer copy'

let store = {
  _state: {
    UsersAndDialogs: {
      contentBase: [
        { id: 1, name: 'Serhii' },
        { id: 2, name: 'Ira' },
        { id: 3, name: 'Sonya' },
        { id: 4, name: 'Persik' },
        { id: 5, name: 'Makoshka' },
      ],
      messagesBase: [
        { id: 0, message: 'Hey there' },
        { id: 1, message: 'I like your hair' },
        { id: 2, message: 'I touched your hair' },
        { id: 3, message: 'Oh my God' },
        { id: 4, message: 'Pshyyy' },
      ],
      listOffriends: [
        { userNeme: 'Serhii' },
        { userNeme: 'Alla' },
        { userNeme: 'Tania' },
        { userNeme: 'Ira' },
        { userNeme: 'Julian' },
        { userNeme: 'Jojo' },
        { userNeme: 'Eskander' },
      ],
      postMessageBase: [
        { userNeme: 'Serhii', text: 'how are you?', likes: 3 },
        { userNeme: 'Alla', text: 'Nice are you?', likes: 2 },
      ],
    },
    NewPostText: 'state',
    NewPostBanner: 'state',
  },

  _callSubscriber() {
    console.log('changed')
  },

  subscribe(observer) {
    _callSubscriber = observer
  },

  getState() {
    return this._state
  },
  dispatch(action) {
    this._state = reducerPost(this.getState(), action)
    this._state = bannerReducer(this.getState(), action)
    _callSubscriber(this._state)
  },
}

let _callSubscriber = () => {
  console.log('changed')
}

export default store
window.state = store

console.log(store._state.NewPostBanner)
