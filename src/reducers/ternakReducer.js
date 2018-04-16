import { ADD_TERNAK_SUCCESS, FETCH_TERNAK_SUCCESS, FETCH_TERNAK_LOADING, FETCH_TERNAK_FAILED } from '../actions/actionTypes'

const initialState = {
  data: [],
  isFetching: false,
  isError: false,
  fetchErrorMsg: ''
}

const ternakReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TERNAK_SUCCESS: {
      let newId = state.length
      const newTernak = { ...action.payload, id: newId}
      const newTernaks = [...state.data, newTernak]
      return { ...state, data: newTernaks }
    }
    case FETCH_TERNAK_SUCCESS: {
      const newTernaks = action.payload
      return {...state, data: newTernaks, isFetching: false}
    }
    case FETCH_TERNAK_LOADING: {
      return { ...state, isFetching: true }
    }
    case FETCH_TERNAK_FAILED: {
      const err = action.payload
      return { ...state, isFetching: false, isError: true, fetchErrorMsg: err }
    }
    default: return state
  }
}

export default ternakReducer