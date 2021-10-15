let UPDATE_KURS_DATE = 'UPDATE_KURS_DATE'
let ADD_KURS_DATA = 'ADD_KURS_DATA'

let initialState = {
  KursData: '',
  KursByUser: '',
}

const kursReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_KURS_DATE:
      return {
        ...state,
        KursData: action.newData.replace(/\D+/g, ''),
      }
    case ADD_KURS_DATA:
      return {
        ...state,
        KursByUser: state.KursData,
        KursData: '',
      }

    default:
      return state
  }
}

export let updateKursData = (data) => {
  return { type: UPDATE_KURS_DATE, newData: data }
}
export let addKursData = () => {
  return { type: ADD_KURS_DATA }
}

export default kursReducer
