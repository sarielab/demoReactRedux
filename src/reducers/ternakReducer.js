import { ADD_TERNAK_SUCCESS, ADD_TERNAK_LOADING, ADD_TERNAK_FAILED, FETCH_TERNAK_SUCCESS, FETCH_TERNAK_LOADING, FETCH_TERNAK_FAILED } from '../actions/actionTypes'

const initialState = {
  data: [],
  isFetching: false,
  isUpdating: false,
  isUpdateError: false,
  updateErrorMsg: '',
  isFetchError: false,
  fetchErrorMsg: ''
}

const ternakReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TERNAK_SUCCESS: {
      let newId = state.length
      const newTernak = { ...action.payload, id: newId}
      const newTernaks = [...state.data, newTernak]
      return { ...state, data: newTernaks, isUpdating: false }
    }
    case ADD_TERNAK_LOADING: {
      return { ...state, isUpdating: true, isUpdateError: false }
    }
    case ADD_TERNAK_FAILED: {
      const err = action.payload.toString()
      return { ...state, isUpdating: false, isUpdateError: true, updateErrorMsg: err }
    }
    case FETCH_TERNAK_SUCCESS: {
      const newTernaks = action.payload
      return {...state, data: newTernaks, isFetching: false}
    }
    case FETCH_TERNAK_LOADING: {
      return { ...state, isFetching: true, isFetchError: false }
    }
    case FETCH_TERNAK_FAILED: {
      const err = action.payload.toString()
      return { ...state, isFetching: false, isFetchError: true, fetchErrorMsg: err }
    }
    default: return state
  }
}

export default ternakReducer