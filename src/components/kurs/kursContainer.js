import React from 'react'
import { connect } from 'react-redux'
import { updateKursData, addKursData } from '../../rdx/kurs_reducer'
import ExchangeComponent from './kurs'

let mapStateToProps = (state) => {
  return {
    KursData: state.ExchangeNBU.KursData,
    KursByUser: state.ExchangeNBU.KursByUser,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateKursData: (data) => {
      dispatch(updateKursData(data))
    },
    addKursData: () => {
      dispatch(addKursData())
    },
  }
}

const ExchangeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeComponent)

export default ExchangeContainer
