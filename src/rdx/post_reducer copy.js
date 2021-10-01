let ADD_MESSAGE_TO_ARREY = 'ADD-MESSAGE-TO-ARREY'
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
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

  NewPostText: 'Schreib!',
}

const reducerPost = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_TO_ARREY:
      let NewPostTexts = state.NewPostText
      return {
        ...state,
        messagesBase: [...state.messagesBase, { id: 5, message: NewPostTexts }],
        NewPostText: '',
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        NewPostText: action.newText,
      }
    default:
      return state
  }
}

export let addMessageToArrey = () => {
  return { type: ADD_MESSAGE_TO_ARREY }
}
export let updateNewPostText = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export default reducerPost
